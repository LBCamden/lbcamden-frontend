/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('campaign-promo-gallery')

describe('campaign-promo-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('campaign-promo-gallery', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders contents', () => {
      const $ = render('campaign-promo-gallery', examples.default)

      expect($('h2').text()).toContain('Heading')
      expect($('a').first().attr('href')).toContain('#1')
      expect($('a').first().text()).toContain('Housing Repairs')
    })
  })
})
