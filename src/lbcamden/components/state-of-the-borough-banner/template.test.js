import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('state-of-the-borough-banner')
describe('state-of-the-borough-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('state-of-the-borough-banner', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })
  })

  describe('custom options', () => {
    it('renders classes', () => {
      const $ = render('state-of-the-borough-banner', examples.classes)

      const $component = $('.lbcamden-state-of-the-borough-banner')
      expect($component.hasClass('app-state-of-the-borough-banner--custom-modifier')).toBeTruthy()
    })
  })
})
