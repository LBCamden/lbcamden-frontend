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

  describe('when JavaScript is available', () => {
    describe('when no navigation is present', () => {
      afterEach(async () => {
        await page.evaluate(() => window.sessionStorage.clear())
      })
      describe('the clickable function', () => {
        it('clicking anywhere on the card should change document.location', async () => {
          await page.goto(baseUrl + '/components/card/clickable-card/preview', { waitUntil: 'load' })

          const initialState = await page.evaluate(() => document.location)
          await page.click('.LBCamden-Card')
          const newState = await page.evaluate(() => document.location)
          expect(initialState).not.toEqual(newState)
        })

        it('should have a pointer cursor', async () => {
          await page.goto(baseUrl + '/components/card/clickable-card/preview', { waitUntil: 'load' })

          const state = await page.evaluate(() => {
            const clickableCard = document.querySelector('.LBCamden-Card')
            return window.getComputedStyle(clickableCard).getPropertyValue('cursor')
          })
          expect(state).toEqual('pointer')
        })
      })
    })
  })

  describe('when JavaScript is not available', () => {
    beforeAll(async () => {
      await page.setJavaScriptEnabled(false)
    })

    afterEach(async () => {
      await page.evaluate(() => window.sessionStorage.clear())
    })

    afterAll(async () => {
      await page.setJavaScriptEnabled(true)
    })

    it('should not have a pointer cursor', async () => {
      await page.goto(baseUrl + '/components/card/clickable-card/preview', { waitUntil: 'load' })

      const state = await page.evaluate(() => {
        const clickableCard = document.querySelector('.LBCamden-Card')
        return window.getComputedStyle(clickableCard).getPropertyValue('cursor')
      })
      expect(state).not.toEqual('pointer')
    })
  })
})
