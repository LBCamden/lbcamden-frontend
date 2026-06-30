import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('two-column-gallery')

describe('two-column-gallery', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('two-column-gallery', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('two-column-gallery', examples.default)

      expect($('h3').first().text()).toContain('Business rates')
      expect($('a').first().text()).toContain('Business rates explained')
      expect($('a').first().attr('href')).toEqual('#')
      expect($('.lbcamden-link--action').first().text()).toContain('View all')
      expect($('.lbcamden-link--action').first().attr('href')).toEqual('#')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('two-column-gallery', examples.classes)

      const $component = $('.lbcamden-two-column-gallery')
      expect($component.hasClass('app-two-column-gallery--custom-modifier')).toBeTruthy()
    })
  })

  describe('with heading', () => {
    it('renders heading', () => {
      const $ = render('two-column-gallery', examples['with heading and description'])

      const $component = $('h2')
      expect($component.text()).toContain('Contents')
    })
  })
})
