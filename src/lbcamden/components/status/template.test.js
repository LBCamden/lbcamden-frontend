/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('status')
describe('status', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('status', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('status', examples.default)

      const $component = $('.lbcamden-status')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('status', examples.classes)

      const $component = $('.lbcamden-status')
      expect($component.hasClass('app-status--custom-modifier')).toBeTruthy()
    })
  })
})
