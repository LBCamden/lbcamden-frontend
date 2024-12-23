/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('emergency-banner')
describe('emergency-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('emergency-banner', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('emergency-banner', examples.classes)

      const $component = $('.lbcamden-emergency-banner')
      expect($component.hasClass('app-emergency-banner--custom-modifier')).toBeTruthy()
    })
  })
})
