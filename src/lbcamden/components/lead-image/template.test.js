import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('lead-image')

describe('lead-image', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('lead-image', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('lead-image', examples.default)

      expect($('.lbcamden-lead-image img').attr('src')).toEqual(examples.default.image.src)
    })
  })
})
