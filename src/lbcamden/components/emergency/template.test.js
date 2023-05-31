/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('emergency')
describe('emergency', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('emergency', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('emergency', examples.default)

      const $component = $('.lbcamden-emergency')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('emergency', examples.classes)

      const $component = $('.lbcamden-emergency')
      expect($component.hasClass('app-emergency--custom-modifier')).toBeTruthy()
    })
  })
})
