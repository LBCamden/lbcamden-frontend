/* eslint-env jest */

import { sync } from 'glob'
import { join } from 'path'

import { renderSass } from '../../../lib/jest-helpers.js'
import paths from '../../../config/paths.json' with { type: "json" }

const sassFiles = sync(`${paths.src}/settings/**/*.scss`)

describe('The settings layer', () => {
  it('should not output any CSS', async () => {
    const settings = join(paths.src, 'settings', '_all.scss')
    const data = `
    @import "../helpers/colour";`

    const output = await renderSass({ data: data, file: settings })
    expect(output.css.toString()).toEqual('')
  })

  it.each(sassFiles)('%s renders to CSS without errors', (file) => {
    if (file !== 'src/lbcamden/settings/_colours.scss') {
      const data = `
      @import "../helpers/colour";`
      return renderSass({ data: data, file: file })
    }
  })
})
