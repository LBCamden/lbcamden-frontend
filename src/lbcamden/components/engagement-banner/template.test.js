/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('engagement-banner')
describe('engagement-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('engagement-banner', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('engagement-banner', examples.default)

      const $component = $('.lbcamden-engagement-banner')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('engagement-banner', examples.classes)

      const $component = $('.lbcamden-engagement-banner')
      expect($component.hasClass('app-engagement-banner--custom-modifier')).toBeTruthy()
    })
  })
})
