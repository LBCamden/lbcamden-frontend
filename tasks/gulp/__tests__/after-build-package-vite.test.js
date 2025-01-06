/* eslint-env jest */

const fs = require('fs')
const path = require('path')
const util = require('util')

const recursive = require('recursive-readdir')
var glob = require('glob')

const configPaths = require('../../../config/paths.json')
const lib = require('../../../lib/file-helper')
// const { componentNameToJavaScriptModuleName } = require('../../../lib/helper-functions')

const { renderSass } = require('../../../lib/jest-helpers')

const readFile = util.promisify(fs.readFile)
const componentNames = lib.allComponents.slice()
// const componentsWithJavaScript = glob.sync(configPaths.package_vite + 'lbcamden/components/' + '**/!(*.test).js')

describe('package/', () => {
  it('should contain the expected files', async () => {
    // Build an array of the files that are present in the package directory.
    const actualPackageFiles = async () => {
      return recursive(configPaths.package_vite).then(
        files => {
          return files
            // Remove /package prefix from filenames
            .map(file => file.replace(/^package-vite\//, ''))
            // Sort to make comparison easier
            .sort()
        },
        error => {
          console.error('Unable to get package files', error)
        }
      )
    }

    // Build an array of files we expect to be found in the package directory,
    // based on the contents of the src directory.
    const expectedPackageFiles = async () => {
      const filesToIgnore = [
        '.DS_Store',
        '*.test.js',
        '*.yaml',
        '*.snap',
        '*/lbcamden/README.md',
        '*/lbcamden/package.json',
        '*/lbcamden/index.html'
      ]

      const additionalFilesNotInSrc = [
        'package.json',
        // 'govuk-prototype-kit.config.json',
        '**/macro-options.json',
        '**/fixtures.json',
        '*.map',
        'README.md',
        'dist/assets/fonts/*.*',
        'dist/assets/images/*.*',
        'dist/assets/images/favicons/*.*',
        'dist/govuk-frontend-*.min.js',
        'dist/lbcamden-frontend-*.min.css',
        'dist/lbcamden-frontend-*.min.js',
        'dist/*.map',
        'dist/index.html'
      ]

      return recursive(configPaths.src, filesToIgnore).then(
        files => {
          let filesNotInSrc = files
          // Use glob to generate an array of files that accounts for wildcards in filenames
          filesNotInSrc = glob.sync('{' + additionalFilesNotInSrc.join(',') + '}', { cwd: 'package-vite' })

          return files
            .map(file => {
              // Remove /src prefix from filenames
              var fileWithoutSrc = file.replace(/^src\//, '')

              // AW: removing all of this because we don't have an ESM folder anymore
              // Account for lbcamden-esm folder
              // if (fileWithoutSrc.split('.').pop() === 'js') {
              //   var esmFile = fileWithoutSrc.replace('lbcamden/', 'lbcamden-esm/')

              //   if (!esmFile.includes('vendor/')) {
              //     esmFile = esmFile.replace('.js', '.mjs')
              //   }

              //   return [fileWithoutSrc, esmFile]
              // } else {
              //   return fileWithoutSrc
              // }
              return fileWithoutSrc
            })
            // Allow for additional files that are not in src
            .concat(filesNotInSrc)
            .flat()
            // Sort to make comparison easier
            .sort()
        },
        error => {
          console.error('Unable to get package files', error)
        }
      )
    }

    await Promise.all([await actualPackageFiles(), await expectedPackageFiles()])
      .then(results => {
        const [actualPackageFiles, expectedPackageFiles] = results

        expect(actualPackageFiles).toEqual(expectedPackageFiles)
      }).catch(error => {
        throw error
      })
  })

  describe('README.md', () => {
    it('is not overwritten', async () => {
      return readFile(path.join(configPaths.package_vite, 'README.md'), 'utf8')
        .then(contents => {
          // Look for H1 matching 'GOV.UK Frontend' from existing README
          expect(contents).toMatch(/^# LBCamden Frontend/)
        }).catch(error => {
          throw error
        })
    })
  })

  describe('all.scss', () => {
    it('should compile without throwing an exception', async () => {
      const allScssFile = path.join(configPaths.package_vite, 'lbcamden', 'all.scss')
      await renderSass({ file: allScssFile })
    })
  })

  // AW: removing because this test is for CJS/AMD and we are now pure ES
  // describe('all.js', () => {
  //   it('should have correct module name', async () => {
  //     const allJsFile = path.join(configPaths.package_vite, 'lbcamden', 'all.js')

  //     return readFile(allJsFile, 'utf8')
  //       .then((data) => {
  //         expect(data).toContain("typeof define === 'function' && define.amd ? define('LBCamdenFrontend', ['exports'")
  //       })
  //       .catch(error => {
  //         throw error
  //       })
  //   })
  // })

  describe('component', () => {
    it.each(componentNames)('\'%s\' should have macro-options.json that contains JSON', async (name) => {
      const filePath = path.join(configPaths.package_vite, 'lbcamden', 'components', name, 'macro-options.json')
      return readFile(filePath, 'utf8')
        .then((data) => {
          var parsedData = JSON.parse(data)

          // We expect the component JSON to contain "name", "type", "required", "description"
          expect(parsedData).toBeInstanceOf(Array)
          parsedData.forEach((option) => {
            expect(option).toEqual(
              expect.objectContaining({
                name: expect.any(String),
                type: expect.any(String),
                required: expect.any(Boolean),
                description: expect.any(String)
              })
            )
          })
        })
        .catch(error => {
          throw error
        })
    })
  })

  // AW: removing because this test is for CJS/AMD and we are now pure ES
  // describe('components with JavaScript', () => {
  //   it.each(componentsWithJavaScript)('\'%s\' should have component JavaScript file with correct module name', (javaScriptFile) => {
  //     const moduleName = componentNameToJavaScriptModuleName(path.parse(javaScriptFile).name)

  //     return readFile(javaScriptFile, 'utf8')
  //       .then((data) => {
  //         expect(data).toContain("typeof define === 'function' && define.amd ? define('" + moduleName + "', factory)")
  //       })
  //       .catch(error => {
  //         throw error
  //       })
  //   })
  // })

  describe('fixtures', () => {
    it.each(componentNames)('\'%s\' should have fixtures.json that contains JSON', (name) => {
      const filePath = path.join(configPaths.package_vite, 'lbcamden', 'components', name, 'fixtures.json')
      return readFile(filePath, 'utf8')
        .then((data) => {
          var parsedData = JSON.parse(data)
          // We expect the component JSON to contain "component" and an array of "fixtures" with "name", "options", and "html"
          expect(parsedData).toEqual(
            expect.objectContaining({
              component: name,
              fixtures: expect.any(Object)
            })
          )

          parsedData.fixtures.forEach((fixture) => {
            expect(fixture).toEqual({
              name: expect.any(String),
              options: expect.any(Object),
              html: expect.any(String),
              hidden: expect.any(Boolean)
            })
          })
        })
        .catch(error => {
          throw error
        })
    })
  })
})
