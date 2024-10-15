/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('video-embed')

describe('video-embed', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('video-embed', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    // it('renders contents', () => {
    //   const $ = render('video-embed', examples.default)

    //   expect($('h2').text()).toContain('Get more from Camden')
    //   expect($('.lbcamden-video-embed__description').text()).toContain('Find relevant services')

    //   expect($('li a').first().text()).toContain('Starting school')
    //   expect($('li a').attr('href')).toEqual('#1')
    //   expect($('li img').attr('src')).toEqual(examples.default.items[0].image.src)
    //   expect($('li img').attr('alt')).toEqual(examples.default.items[0].image.alt)
    // })
  })
})
