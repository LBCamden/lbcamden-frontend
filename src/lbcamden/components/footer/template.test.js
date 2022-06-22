/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('footer')

describe('footer', () => {
  it('default example passes accessibility tests', async () => {
    const $ = render('footer', examples.default)

    const results = await axe($.html())
    expect(results).toHaveNoViolations()
  })

  it('entire component must have a role of `contentinfo`', () => {
    const $ = render('footer', examples.default)

    const $component = $('.LBCamden-Footer')
    expect($component.attr('role')).toEqual('contentinfo')
  })

  it('renders attributes correctly', () => {
    const $ = render('footer', examples.attributes)

    const $component = $('.LBCamden-Footer')
    expect($component.attr('data-test-attribute')).toEqual('value')
    expect($component.attr('data-test-attribute-2')).toEqual('value-2')
  })

  it('renders classes', () => {
    const $ = render('footer', examples.classes)

    const $component = $('.LBCamden-Footer')
    expect($component.hasClass('app-footer--custom-modifier')).toBeTruthy()
  })

  describe('navigation', () => {
    it('passes accessibility tests', async () => {
      const $ = render('footer', examples['with navigation'])

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('no items displayed when no item array is provided', () => {
      const $ = render('footer', examples['with empty navigation'])

      expect($('.govuk-footer__navigation').length).toEqual(0)
    })

    it('renders headings', () => {
      const $ = render('footer', examples['with navigation'])

      const $firstSection = $('.govuk-footer__section:first-child')
      const $lastSection = $('.govuk-footer__section:last-child')
      const $firstHeading = $firstSection.find('h2.govuk-visually-hidden')
      expect($firstHeading.text()).toEqual('Single column list')
    })

    it('renders lists of links', () => {
      const $ = render('footer', examples['with navigation'])

      const $list = $('ul.govuk-footer__list')
      const $items = $list.find('li.govuk-footer__list-item')
      const $firstItem = $items.find('a:first-child')
      expect($items.length).toEqual(6)
      expect($firstItem.attr('href')).toEqual('#1')
      expect($firstItem.text()).toContain('Navigation item 1')
    })

    it('renders attributes on links', () => {
      const $ = render('footer', examples['with navigation item attributes'])

      const $navigationLink = $('.govuk-footer__list a')
      expect($navigationLink.attr('data-attribute')).toEqual('my-attribute')
      expect($navigationLink.attr('data-attribute-2')).toEqual('my-attribute-2')
    })

    it('renders lists in columns', () => {
      const $ = render('footer', examples['with navigation'])

      const $list = $('ul.govuk-footer__list')
      expect($list.hasClass('govuk-footer__list--columns-2')).toBeTruthy()
    })

    it('renders one-column section full width by default', () => {
      const $ = render('footer', examples['with default width navigation (one column)'])

      const $section = $('.govuk-footer__section')
      expect($section.hasClass('govuk-grid-column-full')).toBeTruthy()
    })

    it('renders two-column section full width by default', () => {
      const $ = render('footer', examples['with default width navigation (two columns)'])

      const $section = $('.govuk-footer__section')
      expect($section.hasClass('govuk-grid-column-full')).toBeTruthy()
    })

    it('renders section custom width when width specified', () => {
      const $ = render('footer', examples['with navigation'])

      const $section = $('.govuk-footer__section')
      expect($section.hasClass('govuk-grid-column-two-thirds')).toBeTruthy()
    })
  })
})
