import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('link-columns')

describe('link-columns', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('link-columns', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('link-columns', examples.default)

      expect($('h3').first().text()).toContain('Business rates')
      expect($('a').first().text()).toContain('Business rates explained')
      expect($('a').first().attr('href')).toEqual('#')
      expect($('.lbcamden-link--action').first().text()).toContain('View all')
      expect($('.lbcamden-link--action').first().attr('href')).toEqual('#')
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('link-columns', examples.classes)

      const $component = $('.lbcamden-link-columns')
      expect($component.hasClass('app-link-columns--custom-modifier')).toBeTruthy()
    })
  })

  describe('with heading', () => {
    it('renders heading', () => {
      const $ = render('link-columns', examples['with heading and description'])

      const $component = $('h2')
      expect($component.text()).toContain('Contents')
    })
  })
})
