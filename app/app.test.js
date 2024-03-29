/* eslint-env jest */

const request = require('request')
const cheerio = require('cheerio')

const lib = require('../lib/file-helper')

const configPaths = require('../config/paths.json')
const PORT = configPaths.ports.test

const expectedPages = [
  '/',
  '/components/all',
  '/examples/form-elements',
  '/examples/grid',
  '/examples/links',
  '/examples/typography',
  '/examples/template-default',
  '/examples/template-custom'
]

// Returns a wrapper for `request` which applies these options by default
const requestPath = request.defaults({
  baseUrl: `http://localhost:${PORT}`,
  headers: {
    'Content-Type': 'text/plain'
  }
})

describe(`http://localhost:${PORT}`, () => {
  describe.each(expectedPages)('%s', path => {
    it('should resolve with a http status code of 200', done => {
      requestPath.get(path, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })

    it('should resolve with a ‘Content-Type’ header of "text/html"', done => {
      requestPath.get(path, (err, res) => {
        expect(res.headers['content-type']).toContain('text/html')
        done(err)
      })
    })

    it('should prevent search indexing', done => {
      requestPath.get(path, (err, res) => {
        expect(res.headers['x-robots-tag']).toEqual('none')
        done(err)
      })
    })
  })

  describe('/', () => {
    it('should display the list of components', done => {
      requestPath('/', (err, res) => {
        const $ = cheerio.load(res.body)
        const componentsList = $('li a[href^="/components/"]').get()
        // Since we have an 'all' component link that renders the default example of all
        // components, there will always be one more expected link.
        const expectedComponentLinks = lib.allComponents.length + 1
        expect(componentsList.length).toEqual(expectedComponentLinks)
        done(err)
      })
    })
  })

  describe('/robots.txt', () => {
    it('should allow crawling by robots', done => {
      requestPath('/robots.txt', (err, res) => {
        expect(res.body).toMatch(/^Allow: \/$/m)
        done(err)
      })
    })
  })

  describe('/examples/template-custom', () => {
    const templatePath = '/examples/template-custom'

    it.each([
      'bodyStart',
      'main',
      'content',
      'bodyEnd'
    ])('should have a %s block set', (block, done) => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        expect($.html()).toContain(`<!-- block:${block} -->`)
        done(err)
      })
    })

    it('should have additional `htmlClasses`', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $html = $('html')

        expect($html.attr('class')).toBe('govuk-template app-html-class')
        done(err)
      })
    })

    it('should have assets overriden', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $linkAsset = $('link[href^="/assets/images/favicons/"]')
        expect($linkAsset.length).toBe(4)
        done(err)
      })
    })

    // it('should have theme-color overriden', done => {
    //   requestPath(templatePath, (err, res) => {
    //     const $ = cheerio.load(res.body)
    //     const $linkMaskIcon = $('link[rel="mask-icon"]')
    //     const $metaThemeColor = $('meta[name="theme-color"]')
    //
    //     expect($linkMaskIcon.attr('color')).toBe('blue')
    //     expect($metaThemeColor.attr('content')).toBe('blue')
    //     done(err)
    //   })
    // })

    it('should have additional `bodyClasses`', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $body = $('body')

        expect($body.attr('class')).toBe('govuk-template__body app-body-class')
        done(err)
      })
    })

    it('should have `pageTitle` overriden', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $title = $('title')

        expect($title.html()).toBe('GOV.UK - Le meilleur endroit pour trouver des services gouvernementaux et de l\'information')
        done(err)
      })
    })

    it('should have an application stylesheet', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $appStylesheet = $('link[href="/public/app.css"]')
        expect($appStylesheet.length).toBe(1)
        done(err)
      })
    })

    it('should have a custom Skip link component', done => {
      requestPath(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $skipLink = $('.govuk-skip-link')
        expect($skipLink.html()).toBe('Passer au contenu principal')
        done(err)
      })
    })

    it('should have a custom Footer component', done => {
      requestPath.get(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $footer = $('.govuk-footer')
        const $footerLink = $footer.find('.govuk-footer__link')
        expect($footerLink.html()).toContain('Aidez-moi')
        done(err)
      })
    })

    it('should have `content` within the main section of the page', done => {
      requestPath.get(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $main = $('#main-content')

        expect($main.html()).toContain('<!-- block:content -->')
        done(err)
      })
    })

    it('should have `beforeContent` outside the main section of the page', done => {
      requestPath.get(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $container = $('#main-content')
        const $phaseBanner = $container.find('> .govuk-phase-banner')
        const $backLink = $container.find('> .govuk-back-link')

        expect($phaseBanner.length).toBe(0)
        expect($backLink.length).toBe(0)
        done(err)
      })
    })

    it('should have set `mainClasses`', done => {
      requestPath.get(templatePath, (err, res) => {
        const $ = cheerio.load(res.body)
        const $main = $('#main-content')

        expect($main.attr('class')).toBe('govuk-main-wrapper--auto-spacing app-main-class')
        done(err)
      })
    })
  })
})
