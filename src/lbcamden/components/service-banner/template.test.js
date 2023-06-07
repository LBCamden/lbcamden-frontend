/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('service-banner')
describe('service-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('service-banner', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('service-banner', examples.default)

      const $component = $('.lbcamden-service-banner')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('service-banner', examples.classes)

      const $component = $('.lbcamden-service-banner')
      expect($component.hasClass('app-service-banner--custom-modifier')).toBeTruthy()
    })
  })
})
