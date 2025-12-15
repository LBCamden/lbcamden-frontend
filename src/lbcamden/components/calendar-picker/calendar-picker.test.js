/**
 * @jest-environment jsdom
 */
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { renderDOM, getExamples } from '../../../../lib/jest-helpers'
import LBCamdenCalendarPicker from './calendar-picker'
import userEvent from '@testing-library/user-event'

const examples = getExamples('calendar-picker')

function renderExample (example = examples.default) {
  return renderDOM('calendar-picker', example, {
    jsModules: [LBCamdenCalendarPicker]
  })
}

describe('Calendar Picker JS', () => {
  let user

  beforeEach(() => {
    user = userEvent.setup()
    // Mock Date to ensure consistent calendar rendering
    // We'll mock it to 2023-06-15
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date(2023, 5, 15)) // Month is 0-indexed: 5 is June
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('toggles the dialog when clicking the button', async () => {
    const component = renderExample()
    const toggle = component.querySelector('.lbcamden-calendar-picker__toggle')
    const dialog = component.querySelector('.lbcamden-calendar-picker__dialog')

    expect(dialog.hidden).toBe(true)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')

    await user.click(toggle)

    expect(dialog.hidden).toBe(false)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')

    // Ensure focus is within module so key events are captured
    // In real browser, click focuses button. In JSDOM/user-event, verify:
    toggle.focus()

    await user.keyboard('{Escape}')

    expect(dialog.hidden).toBe(true)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('closes dialog on escape', async () => {
    const component = renderExample()
    const toggle = component.querySelector('.lbcamden-calendar-picker__toggle')
    const dialog = component.querySelector('.lbcamden-calendar-picker__dialog')

    await user.click(toggle)
    expect(dialog.hidden).toBe(false)

    await user.keyboard('{Escape}')
    expect(dialog.hidden).toBe(true)
    expect(document.activeElement).toBe(toggle)
  })

  it('selects a date when clicking a grid cell', async () => {
    const component = renderExample()
    const toggle = component.querySelector('.lbcamden-calendar-picker__toggle')
    const input = component.querySelector('.lbcamden-calendar-picker__input')
    const dialog = component.querySelector('.lbcamden-calendar-picker__dialog')

    await user.click(toggle)

    // Find a specific date button, e.g., 20th
    // Since we mocked date to June 2023, 20th exists.
    const dateBtn = component.querySelector('button[data-date*="2023-06-20"]')

    await user.click(dateBtn)

    expect(input.value).toBe('20/06/2023')
    expect(dialog.hidden).toBe(true)
    expect(document.activeElement).toBe(toggle)
  })

  it('navigates months', async () => {
    const component = renderExample()
    const toggle = component.querySelector('.lbcamden-calendar-picker__toggle')
    const header = component.querySelector('.lbcamden-calendar-picker__month-year')
    const nextBtn = component.querySelector('.lbcamden-calendar-picker__nav--next')

    await user.click(toggle)
    expect(header.textContent).toBe('June 2023')

    await user.click(nextBtn)
    expect(header.textContent).toBe('July 2023')
  })
})
