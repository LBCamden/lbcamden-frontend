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

  describe('card with images', () => {
    it('renders classes', () => {
      const $ = render('card', examples['with image'])

      const $component = $('.LBCamden-Card')
      expect($component.hasClass('LBCamden-Card--image')).toBeTruthy()
    })

    it('has a content wrapper ', () => {
      const $ = render('card', examples['with image'])

      const $component = $('.LBCamden-Card .LBCamden-Card__content_wrapper')
      expect($component.length).toEqual(1)
    })
  })

  describe('card decorations', () => {
    describe('Type 1', () => {
      it('renders classes', () => {
        const $ = render('card', examples['decorated type 1'])

        const $component = $('.LBCamden-Card')
        expect($component.hasClass('LBCamden-Card--alt-1')).toBeTruthy()
      })
    })

    describe('Type 2', () => {
      it('renders classes', () => {
        const $ = render('card', examples['decorated type 2'])

        const $component = $('.LBCamden-Card')
        expect($component.hasClass('LBCamden-Card--alt-2')).toBeTruthy()
      })
    })

    describe('Type 3', () => {
      it('renders classes', () => {
        const $ = render('card', examples['decorated type 3'])

        const $component = $('.LBCamden-Card')
        expect($component.hasClass('LBCamden-Card--alt-3')).toBeTruthy()
      })
    })

    describe('with border', () => {
      it('renders classes', () => {
        const $ = render('card', examples['decorated type 1 with top border'])

        const $component = $('.LBCamden-Card')
        expect($component.hasClass('LBCamden-Card--top-border')).toBeTruthy()
      })
    })
  })
})
