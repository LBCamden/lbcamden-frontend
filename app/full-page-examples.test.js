/* eslint-env jest */

const request = require('request')
const cheerio = require('cheerio')

const configPaths = require('../config/paths.json')
const PORT = configPaths.ports.test

const expectedPages = [
  'announcements',
  'campaign-page',
  'check-your-answers',
  'feedback',
  'service-manual-topic',
  'start-page',
  'update-your-account-details',
  'upload-your-photo',
  'what-is-your-address',
  'what-is-your-nationality',
  'what-is-your-postcode',
  'what-was-the-last-country-you-visited'
]

// Returns a wrapper for `request` which applies these options by default
const requestPath = request.defaults({
  baseUrl: `http://localhost:${PORT}/full-page-examples/`,
  headers: {
    'Content-Type': 'text/plain'
  }
})

describe(`http://localhost:${PORT}/full-page-examples/`, () => {
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

  describe('/full-page-examples/', () => {
    describe('feedback', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('feedback', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Send your feedback')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('feedback', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Send your feedback')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('update-your-account-details', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('update-your-account-details', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Update your account details')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('update-your-account-details', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Update your account details')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('upload-your-photo', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('upload-your-photo', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Upload your photo')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('upload-your-photo', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('Upload your photo')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('what-is-your-nationality', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('what-is-your-nationality', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your nationality?')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('what-is-your-nationality', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your nationality?')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('what-is-your-address', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('what-is-your-address', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your address?')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('what-is-your-address', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your address?')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('what-is-your-postcode', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('what-is-your-postcode', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your home postcode?')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('what-is-your-postcode', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What is your home postcode?')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })

    describe('search', () => {
      it('should show most wanted results by default', (done) => {
        requestPath.get('search', (err, res) => {
          const $ = cheerio.load(res.body)
          // Check the results are correct
          expect($.html()).toContain('822,411 results')
          done(err)
        })
      })
      it('should show sorted results when selected', (done) => {
        requestPath.get('search?order=updated-newest', (err, res) => {
          const $ = cheerio.load(res.body)
          // Check the results are correct
          expect($.html()).toContain('142,218 results')
          done(err)
        })
      })
      it('should show organisation results when selected', (done) => {
        requestPath.get('search?order=updated-newest&organisation=hmrc', (err, res) => {
          const $ = cheerio.load(res.body)
          // Check the results are correct
          expect($.html()).toContain('421,182 results')
          done(err)
        })
      })
    })

    describe('what-was-the-last-country-you-visited', () => {
      it('should not show errors if submit with no input', (done) => {
        requestPath.get('what-was-the-last-country-you-visited', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What was the last country you visited?')

          // Check that the error summary is not visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeFalsy()
          done(err)
        })
      })
      it('should show errors if form is submitted with no input', (done) => {
        requestPath.post('what-was-the-last-country-you-visited', (err, res) => {
          const $ = cheerio.load(res.body)

          // Check the page responded correctly
          expect(res.statusCode).toBe(200)
          expect($.html()).toContain('What was the last country you visited?')

          // Check the title has an error
          expect($('title').text()).toContain('Error:')

          // Check that the error summary is visible
          const $errorSummary = $('[data-module="govuk-error-summary"]')
          expect($errorSummary.length).toBeTruthy()
          done(err)
        })
      })
    })
  })
})
