import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('calendar-picker')

describe('Calendar Picker Template', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('calendar-picker', examples.default)
      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders the default example structure', () => {
      const $ = render('calendar-picker', examples.default)
      
      const $wrapper = $('.lbcamden-calendar-picker')
      expect($wrapper.length).toEqual(1)
      
      const $input = $('.lbcamden-calendar-picker__input')
      expect($input.get(0).tagName).toEqual('input')
      
      const $toggle = $('.lbcamden-calendar-picker__toggle')
      expect($toggle.length).toEqual(1)
      expect($toggle.text()).toContain('Choose date')
      
      const $dialog = $('.lbcamden-calendar-picker__dialog')
      expect($dialog.attr('hidden')).toBeDefined()
    })
  })

  describe('with value', () => {
    it('renders input with value', () => {
      const $ = render('calendar-picker', examples.withValues)
      const $input = $('.lbcamden-calendar-picker__input')
      expect($input.val()).toEqual('15/06/2023')
    })
  })
  
  describe('error state', () => {
    it('renders error message', () => {
      const $ = render('calendar-picker', examples.error)
      const $error = $('.govuk-error-message')
      expect($error.text()).toContain('The date must be in the future')
    })
  })
})
