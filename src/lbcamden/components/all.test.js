import { describe, expect, it, beforeAll } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { allComponents } = require('../../../lib/file-helper')
const { renderSass } = require('../../../lib/jest-helpers')

const configPaths = require('../../../config/paths.json')

// We can't use the render function from jest-helpers, because we need control
// over the nunjucks environment.
const nunjucks = require('nunjucks')

describe('When nunjucks is configured with a different base path', () => {
  beforeAll(() => {
    // Create a new Nunjucks environment that uses the src directory as its
    // base path, rather than the components folder itself
    nunjucks.configure(configPaths.src)
  })

  it.each(allComponents)('render(\'%s\') does not error', (component) => {
    expect(() => {
      nunjucks.render(`components/${component}/template.njk`, {})
    }).not.toThrow()
  })
})

it('_all.scss renders to CSS without errors', () => {
  return renderSass({
    data: '@import "../base"; @import "../elements/all";',
    file: `${configPaths.src}/components/_all.scss`
  })
})

it.each(allComponents)('%s.scss renders to CSS without errors', (component) => {
  const sass = `
        @import "base";
      `
  return renderSass({
    data: sass,
    file: `${configPaths.src}/components/${component}/_${component}.scss`
  })
})
