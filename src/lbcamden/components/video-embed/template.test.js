import { describe, expect, it } from 'vitest'
import { configureAxe } from "vitest-axe";
const axe = configureAxe({
  rules: {
    'skip-link': { enabled: false },
    region: { enabled: false }
  }
})

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('video-embed')

describe('video-embed', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('video-embed', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('video-embed', examples.default)

      expect($('iframe').attr('title')).toContain('No Excuses Camden Local Offer Quality teaching and learning for ALL learners')
    })
  })
})
