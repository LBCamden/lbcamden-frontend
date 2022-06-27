/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('card')

describe('card', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('card', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })
  })

  describe('custom options', () => {
    it('renders attributes correctly', () => {
      const $ = render('card', examples.attributes)

      const $component = $('.LBCamden-Card')
      expect($component.attr('data-test-attribute')).toEqual('value')
      expect($component.attr('data-test-attribute-2')).toEqual('value-2')
    })

    it('renders classes', () => {
      const $ = render('card', examples.classes)

      const $component = $('.LBCamden-Card')
      expect($component.hasClass('app-header--custom-modifier')).toBeTruthy()
    })
  })

  describe('popular card', () => {
    it('renders classes', () => {
      const $ = render('card', examples.popular)

      const $component = $('.LBCamden-Card')
      expect($component.hasClass('LBCamden-Card--popular')).toBeTruthy()
    })

    it('has smaller heading size', () => {
      const $ = render('card', examples.popular)

      const $component = $('.LBCamden-Card h2')
      expect($component.hasClass('govuk-heading-s')).toBeTruthy()
    })
  })
})
