import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('button')

describe('Button', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('button', examples.default)
      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders the default example', () => {
      const $ = render('button', examples.default)

      const $component = $('.lbcamden-button')
      expect($component.get(0).tagName).toEqual('button')
      expect($component.text()).toContain('Save and continue')
    })
  })

  describe('custom options', () => {
    it('renders with attributes', () => {
      const $ = render('button', examples.attributes)

      const $component = $('.lbcamden-button')
      expect($component.attr('aria-controls')).toEqual('example-id')
      expect($component.attr('data-tracking-dimension')).toEqual('123')
    })

    it('renders with classes', () => {
      const $ = render('button', examples.classes)

      const $component = $('.lbcamden-button')
      expect($component.hasClass('app-button--custom-modifier')).toBeTruthy()
    })

    it('renders with disabled', () => {
      const $ = render('button', examples.disabled)

      const $component = $('.lbcamden-button')
      expect($component.attr('aria-disabled')).toEqual('true')
      expect($component.attr('disabled')).toEqual('disabled')
      expect($component.hasClass('lbcamden-button--disabled')).toBeTruthy()
    })

    it('renders with name', () => {
      const $ = render('button', examples.name)

      const $component = $('.lbcamden-button')
      expect($component.attr('name')).toEqual('start-now')
    })

    it('renders with value', () => {
      const $ = render('button', examples.value)

      const $component = $('.lbcamden-button')
      expect($component.attr('value')).toEqual('start')
    })

    it('renders with type', () => {
      const $ = render('button', examples.type)

      const $component = $('.lbcamden-button')
      expect($component.attr('type')).toEqual('button')
    })

    it('renders with html', () => {
      const $ = render('button', examples.html)

      const $component = $('.lbcamden-button')
      expect($component.html()).toContain('Start <em>now</em>')
    })

    it('renders with preventDoubleClick attribute', () => {
      const $ = render('button', examples['prevent double click'])

      const $component = $('.lbcamden-button')
      expect($component.attr('data-prevent-double-click')).toEqual('true')
    })
  })

  describe('link', () => {
    it('renders with anchor, href and an accessible role of button', () => {
      const $ = render('button', examples['explicit link'])

      const $component = $('.lbcamden-button')
      expect($component.get(0).tagName).toEqual('a')
      expect($component.attr('href')).toEqual('/')
      expect($component.attr('role')).toEqual('button')
      expect($component.text()).toContain('Continue')
    })

    it('renders with hash href if no href passed', () => {
      const $ = render('button', examples['no href'])

      const $component = $('.lbcamden-button')
      expect($component.attr('href')).toEqual('#')
    })

    it('renders with attributes', () => {
      const $ = render('button', examples['link attributes'])

      const $component = $('.lbcamden-button')
      expect($component.attr('aria-controls')).toEqual('example-id')
      expect($component.attr('data-tracking-dimension')).toEqual('123')
    })

    it('renders with classes', () => {
      const $ = render('button', examples['link classes'])

      const $component = $('.lbcamden-button')
      expect($component.hasClass('app-button--custom-modifier')).toBeTruthy()
    })

    it('renders with disabled', () => {
      const $ = render('button', examples['link disabled'])

      const $component = $('.lbcamden-button')
      expect($component.hasClass('lbcamden-button--disabled')).toBeTruthy()
    })
  })

  describe('with explicit input button set by "element"', () => {
    it('renders with anchor, href and an accessible role of button', () => {
      const $ = render('button', examples.input)

      const $component = $('.lbcamden-button')
      expect($component.get(0).tagName).toEqual('input')
      expect($component.attr('type')).toEqual('submit')
    })

    it('renders with attributes', () => {
      const $ = render('button', examples['input attributes'])

      const $component = $('.lbcamden-button')
      expect($component.attr('aria-controls')).toEqual('example-id')
      expect($component.attr('data-tracking-dimension')).toEqual('123')
    })

    it('renders with classes', () => {
      const $ = render('button', examples['input classes'])

      const $component = $('.lbcamden-button')
      expect($component.hasClass('app-button--custom-modifier')).toBeTruthy()
    })

    it('renders with disabled', () => {
      const $ = render('button', examples['input disabled'])

      const $component = $('.lbcamden-button')
      expect($component.attr('aria-disabled')).toEqual('true')
      expect($component.attr('disabled')).toEqual('disabled')
      expect($component.hasClass('lbcamden-button--disabled')).toBeTruthy()
    })

    it('renders with name', () => {
      const $ = render('button', examples.input)

      const $component = $('.lbcamden-button')
      expect($component.attr('name')).toEqual('start-now')
    })

    it('renders with type', () => {
      const $ = render('button', examples['input type'])

      const $component = $('.lbcamden-button')
      expect($component.attr('type')).toEqual('button')
    })
  })

  describe('implicitly as no "element" param is set', () => {
    it('renders a link if you pass an href', () => {
      const $ = render('button', examples.link)

      const $component = $('.lbcamden-button')
      expect($component.get(0).tagName).toEqual('a')
    })

    it('renders a button if you don\'t pass anything', () => {
      const $ = render('button', examples['no data'])

      const $component = $('.lbcamden-button')
      expect($component.get(0).tagName).toEqual('button')
    })
  })

  describe('Start button', () => {
    it('renders a svg', () => {
      const $ = render('button', examples['start link'])

      const $component = $('.lbcamden-button .lbcamden-button__start-icon')
      expect($component.get(0).tagName).toEqual('svg')
    })
  })
})
