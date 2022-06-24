/* eslint-env jest */

const { devices } = require('puppeteer')
const iPhone = devices['iPhone 6']
const configPaths = require('../../../../config/paths.json')
const PORT = configPaths.ports.test

const baseUrl = 'http://localhost:' + PORT

describe('Card', () => {
  beforeAll(async () => {
    await page.emulate(iPhone)
  })

  // describe('when JavaScript is unavailable or fails', () => {
  //   beforeAll(async () => {
  //     await page.setJavaScriptEnabled(false)
  //     await page.goto(`${baseUrl}/components/header/with-navigation/preview`, {
  //       waitUntil: 'load'
  //     })
  //   })
  //
  //   afterAll(async () => {
  //     await page.setJavaScriptEnabled(true)
  //   })
  //
  //   // it('shows the navigation', async () => {
  //   //   await expect(page).toMatchElement('.govuk-header__navigation', {
  //   //     visible: true,
  //   //     timeout: 1000
  //   //   })
  //   // })
  // })

  describe('when JavaScript is available', () => {
    describe('when no navigation is present', () => {
      it('exits gracefully with no errors', async () => {
        // Errors logged to the console will cause this test to fail
        await page.goto(`${baseUrl}/components/card/preview`, {
          waitUntil: 'load'
        })
      })
    })
  })
})
