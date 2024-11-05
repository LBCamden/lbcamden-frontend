/* eslint-env jest */

import { allComponents } from '../../../lib/file-helper.js'
import { renderSass } from '../../../lib/jest-helpers.js'

import paths from '../../../config/paths.json' with { type: "json" }

import percySnapshot from '@percy/puppeteer'

// We can't use the render function from jest-helpers, because we need control
// over the nunjucks environment.
import njk from 'nunjucks'

describe('When nunjucks is configured with a different base path', () => {
  beforeAll(() => {
    // Create a new Nunjucks environment that uses the src directory as its
    // base path, rather than the components folder itself
    njk.configure(paths.src)
  })

  it.each(allComponents)('render(\'%s\') does not error', (component) => {
    expect(() => {
      njk.render(`components/${component}/template.njk`, {})
    }).not.toThrow()
  })
})

it('_all.scss renders to CSS without errors', () => {
  return renderSass({
    data: '@import "../base"; @import "../elements/all";',
    file: `${paths.src}/components/_all.scss`
  })
})

it.each(allComponents)('%s.scss renders to CSS without errors', (component) => {
  const sass = `
        @import "base";
      `
  return renderSass({
    data: sass,
    file: `${paths.src}/components/${component}/_${component}.scss`
  })
})

it.each(allComponents)('generate screenshots for Percy visual regression, with JavaScript disabled', async (component) => {
  await page.setJavaScriptEnabled(false)
  await page.goto(getComponentStoryUrl(component), { waitUntil: 'load' })
  await percySnapshot(page, 'no-js: ' + component)
})

it.each(allComponents)('generate screenshots for Percy visual regression, with JavaScript enabled', async (component) => {
  await page.setJavaScriptEnabled(true)
  await page.goto(getComponentStoryUrl(component), { waitUntil: 'load' })
  await percySnapshot(page, 'js: ' + component)
})
