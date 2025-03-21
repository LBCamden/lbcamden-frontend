import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('campaign-hero')

describe('campaign-hero', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('card-gallery', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('campaign-hero', examples.default)

      expect($('h1').text()).toContain('Welcome to Camden')
      expect($('p').text()).toContain('We provide services and information for residents, businesses and visitors to the London Borough of Camden.')
      expect($('img').attr('src')).toEqual(examples.default.image.src)
    })
  })
})
