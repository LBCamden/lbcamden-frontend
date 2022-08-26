/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('search')

describe('search', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('search', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('input renders with id', () => {
      const $ = render('search', examples.default)

      const $component = $('.LBCamden-Search__input')
      expect($component.attr('id')).toEqual('LBCamden-Search__box')
    })

    it('input renders with name', () => {
      const $ = render('search', examples.default)

      const $component = $('.LBCamden-Search__input')
      expect($component.attr('name')).toEqual('search')
    })

    it('input renders with placeholder="Search" by default', () => {
      const $ = render('search', examples.default)

      const $component = $('.LBCamden-Search__input')
      expect($component.attr('placeholder')).toEqual('Search')
    })

    it('renders with a form', () => {
      const $ = render('search', examples.default)

      const $formGroup = $('form')
      expect($formGroup.length).toBeTruthy()
    })

    it('renders label with "for" attribute reffering the input "id"', () => {
      const $ = render('search', examples.default)

      const $label = $('.govuk-label')
      expect($label.attr('for')).toEqual('LBCamden-Search__box')
    })
  })

  describe('custom options', () => {
    it('renders classes correctly', () => {
      const $ = render('search', examples.classes)

      const $component = $('.LBCamden-Search')
      expect($component.hasClass('search-class-test')).toBeTruthy()
    })

    it('renders alt classname', () => {
      const $ = render('search', examples['Colour variant'])

      const $component = $('.LBCamden-Search')
      expect($component.attr('class')).toContain('LBCamden-Search--alt')
    })

    it('renders custom label and call to action text', () => {
      const $ = render('search', examples.labelText)

      const $component1 = $('.LBCamden-Search label')
      const $component2 = $('.LBCamden-Search__btn')
      expect($component1.text()).toContain('Search test')
      expect($component2.text()).toContain('Search test')
    })

    it('renders custom placeholder text', () => {
      const $ = render('search', examples['Placeholder text'])

      const $component = $('.LBCamden-Search__input')
      expect($component.attr('placeholder')).toBe('Customised placeholder')
    })
  })
})
