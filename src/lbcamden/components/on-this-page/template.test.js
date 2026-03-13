import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('on-this-page')

describe('on-this-page', () => {
  describe('default example', () => {

    it('renders contents', () => {
      const $ = render('on-this-page', examples.default)

      expect($('h2').text()).toContain('On this page')
    })
  })
})
