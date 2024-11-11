#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import glob from 'glob'
import { dirname, join, sep } from 'path'
import paths from '../config/paths.json' with { type: "json" }
import * as yaml from 'yaml'
import njk from 'nunjucks'

for (const examplePath of glob.sync("lbcamden/**/*.yaml", { cwd: 'src' })) {
  const destStem = dirname(examplePath)
  const srcPath = join('src', examplePath)
  const fixture = generateFixtures(srcPath)
  const options = generateMacroOptions(srcPath)

  writeFileSync(join(destStem, 'macro-options.json'), options)
  writeFileSync(join(destStem, 'fixtures.json'), fixture)
}

function generateFixtures (file) {
  const json = convertYamlToJson(file)
  const componentName = dirname(file).split(sep).slice(-1).toString()
  const componentTemplatePath = join(paths.components, componentName, 'template.njk')

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
          html: njk.render(componentTemplatePath, { params: example.data }).trim(),
          hidden: Boolean(example.hidden)
        }

        fixtures.fixtures.push(fixture)
      })

      return JSON.stringify(fixtures, null, 4)
    } else {
      console.error(file.path + ' is missing "examples" and/or "params"')
    }
  }
}

function generateMacroOptions (file) {
  const json = convertYamlToJson(file)
  let paramsJson

  if (json) {
    paramsJson = json.params // We only want the 'params' data from component yaml

    if (paramsJson) {
      return JSON.stringify(paramsJson, null, 4)
    } else {
      console.error(file.path + ' is missing "params"')
    }
  }
}

function convertYamlToJson (file) {
  const componentName = dirname(file).split(sep).slice(-1).toString()
  const componentPath = join(paths.components, componentName, `${componentName}.yaml`)
  let yamlContents

  try {
    yamlContents = readFileSync(componentPath, { encoding: 'utf8', json: true })
  } catch (e) {
    console.error('ENOENT: no such file or directory: ', componentPath)
  }

  if (yamlContents) {
    return yaml.parse(yamlContents)
  }

  return false
}
