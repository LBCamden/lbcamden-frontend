import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import fixtures from './rollup-plugin-fixtures'

import yaml from '@rollup/plugin-yaml';

const { GlobSync : globSync } = glob;

function generateMacroOptions (file) {
  const json = convertYamlToJson(file)
  let paramsJson

  if (json) {
    paramsJson = json.params // We only want the 'params' data from component yaml

    if (paramsJson) {
      file.contents = Buffer.from(JSON.stringify(paramsJson, null, 4))
      return file
    } else {
      console.error(file.path + ' is missing "params"')
    }
  }
}



function generateFixtures (file) {
  const json = convertYamlToJson(file)
  const componentName = path.dirname(file.path).split(path.sep).slice(-1).toString()
  const componentTemplatePath = path.join(configPaths.components, componentName, 'template.njk')

  if (json) {
    const examplesJson = json.examples

    if (examplesJson) {
      const fixtures = {
        component: componentName,
        fixtures: []
      }

      examplesJson.forEach(function (example) {
        const fixture = {
          name: example.name,
          options: example.data,
          html: nunjucks.render(componentTemplatePath, { params: example.data }).trim(),
          hidden: Boolean(example.hidden)
        }

        fixtures.fixtures.push(fixture)
      })

      file.contents = Buffer.from(JSON.stringify(fixtures, null, 4))
      return file
    } else {
      console.error(file.path + ' is missing "examples" and/or "params"')
    }
  }
}

export default defineConfig({
    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
        // yaml({
        //   safe:true,
        //   }),
        fixtures(),
        viteStaticCopy({
          targets: [
            {
              src: 'package.json',
              dest: './'
            },
            {
                src: 'assets/images/*',
                dest: 'dist'
            },
            {
              src: '**/*',
              dest: 'lbcamden'
            },
            {
              src: 'README.md',
              dest: './'
            }
          ],
          structured:true
        })
    ],
    root: 'src/lbcamden',
    emitIndex: false,
    assetsInclude: ['**/*.md', '**/*.yaml', '**/*.woff', '**/*.woff2'],
    build: {
        outDir: '../../package-vite',
        minify: true,
        assetsDir: 'dist/assets',
        emptyOutDir: true,
        // assetsInclude: ['**/*.md', '**/*.yaml'],
        rollupOptions: {
            manualChunks: false,
            treeshake: false,
            inlineDynamicImports:true,
            input: {
              govuk_js: './node_modules/govuk-frontend/govuk/all.js',
              lbcamden_js: './src/lbcamden/all.js',
              lbcamden_css: './src/lbcamden/all.scss',
              ...Object.fromEntries(
                globSync('./src/lbcamden/components/**/*.yaml').found.map(file => [
                  // This remove `src/` as well as the file extension from each
                  // file, so e.g. src/nested/foo.js becomes nested/foo
                  path.relative(
                    'src',
                    file.slice(0, file.length - path.extname(file).length) + '-fixtures' + path.extname(file)
                  ),
                  // This expands the relative paths to absolute paths, so e.g.
                  // src/nested/foo becomes /project/src/nested/foo.js
                  fileURLToPath(new URL(file, import.meta.url))
                ])
              )
            },
            output: {
              inlineDynamicImports : false,
              entryFileNames: function(file) {
                console.log("🐱" + JSON.stringify(file, null, 4))
                
                // if(file.name == 'lbcamden_css') {
                //   return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
                // }
                
                // if(file.name.endsWith('fixtures.yaml')) {
                //   return file.name.slice(0, file.name.length - path.extname(file.name).length) + '.json'
                // }

                if(file.name == 'lbcamden_js') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                }

                if(file.name == 'govuk_js') {
                  return 'dist/govuk-frontend-4.7.0.min.js' //AW: MUST FIX: MAGIC STRING
                }

                return`aaa-dist/[name].js`
              },
              chunkFileNames: function(file) {
                console.log("🐵" + JSON.stringify(file, null, 4))
                // if(file.name == 'index.js') {
                //     return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                // }

                return`bbb-dist/[name].js`
              },
              assetFileNames: function (file) {
                // console.log("🐶" + JSON.stringify(file, null, 4))

                //Rename CSS output
                if(file.name == 'lbcamden_css.css') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
                }

                if(file.name.endsWith('yaml')){
                  console.log('YAML')
                }

                if(file.name.endsWith('emit')){
                  console.log('EMIT')
                }

                // if(file.name == 'lbcamden_readme') {
                //   return `aaa[name].[ext]`
                // }

                //Handle fonts
                if(file.name.endsWith('woff') || file.name.endsWith('woff2')) {
                    return `dist/assets/fonts/[name].[ext]`
                }

                return `dist/assets/[name].[ext]`;
                },
              
            }
        }
    }

})