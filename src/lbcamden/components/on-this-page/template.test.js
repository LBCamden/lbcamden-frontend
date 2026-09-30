import { describe, expect, it } from 'vitest'

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('on-this-page')

describe('on-this-page', () => {
  describe('default example', () => {

    it('renders contents', () => {
      const $ = render('on-this-page', examples.default)

      expect($('h2').text()).toContain('On This Page')
    })
  })
})
