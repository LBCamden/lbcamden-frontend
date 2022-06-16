/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('header')

describe('header', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('header', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('header', examples.default)

      const $component = $('.LBCamden-Header')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders attributes correctly', () => {
      const $ = render('header', examples.attributes)

      const $component = $('.LBCamden-Header')
      expect($component.attr('data-test-attribute')).toEqual('value')
      expect($component.attr('data-test-attribute-2')).toEqual('value-2')
    })

    it('renders classes', () => {
      const $ = render('header', examples.classes)

      const $component = $('.LBCamden-Header')
      expect($component.hasClass('app-header--custom-modifier')).toBeTruthy()
    })
  })
})
