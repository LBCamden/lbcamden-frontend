/* @jest-environment node */
/* eslint-env jest */

const path = require('path')

const { renderSass } = require('../../../lib/jest-helpers')

const lib = require('../../../lib/file-helper')
const configPaths = require('../../../config/paths.json')

describe('Individual components', () => {
  it('should compile individual scss files without throwing exceptions', done => {
    const componentNames = lib.allComponents.slice()

    const getSassRenders = () => {
      return componentNames.map(name => {
        const filePath = path.join(configPaths.components, name, `_${name}.scss`)
        const sass = `
        @import "base";
      `
        return renderSass({ data: sass, file: filePath })
      })
    }

    Promise
      .all(getSassRenders())
      .then(() => { done() })
      .catch(error => { throw new Error(error.message) })
  })
})
