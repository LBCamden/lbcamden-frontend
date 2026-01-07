import { describe, expect, it } from 'vitest'
const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('map-embed')

describe('map-embed', () => {
  describe('no API key', () => {

    it('renders contents', () => {
      const $ = render('map-embed', examples.default)

      expect($('img').attr('alt')).toContain('The map has not loaded.')
    })
  })
})
