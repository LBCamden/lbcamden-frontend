/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('promo-gallery')

describe('promo-gallery', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('promo-gallery', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('promo-gallery', examples.default)

      const $component = $('li').first()
      expect($component.text()).toContain('Housing Repairs')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('promo-gallery', examples.classes)

      const $component = $('.lbcamden-promo-gallery')
      expect($component.hasClass('app-promo-gallery--custom-modifier')).toBeTruthy()
    })
  })

  describe('with heading', () => {
    it('renders heading', () => {
      const $ = render('promo-gallery', examples['with heading'])

      const $component = $('h2')
      expect($component.text()).toContain('Popular')
    })
  })
})
