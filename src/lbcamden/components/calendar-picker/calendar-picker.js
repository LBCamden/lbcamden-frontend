
const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  TAB: 9
}

function LBCamdenCalendarPicker ($module) {
  this.$module = $module
  this.$input = $module.querySelector('.lbcamden-calendar-picker__input')
  this.$toggle = $module.querySelector('.lbcamden-calendar-picker__toggle')
  this.$dialog = $module.querySelector('.lbcamden-calendar-picker__dialog')
  this.$gridBody = $module.querySelector('.lbcamden-calendar-picker__dates')
  this.$monthYear = $module.querySelector('.lbcamden-calendar-picker__month-year')
  this.$prevBtn = $module.querySelector('.lbcamden-calendar-picker__nav--prev')
  this.$nextBtn = $module.querySelector('.lbcamden-calendar-picker__nav--next')
  this.$cancelBtn = $module.querySelector('.lbcamden-calendar-picker__cancel')
  this.$todayBtn = $module.querySelector('.lbcamden-calendar-picker__today')

  this.currentDate = new Date() // The date currently being viewed in the calendar
  this.selectedDate = null // The date selected by the user
}

LBCamdenCalendarPicker.prototype.init = function () {
  if (!this.$module) {
    return
  }

  // Parse initial value from input if valid
  if (this.$input.value) {
    const parts = this.$input.value.split('/')
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1
      const year = parseInt(parts[2], 10)
      const date = new Date(year, month, day)
      if (!isNaN(date.getTime())) {
        this.selectedDate = date
        this.currentDate = new Date(date)
      }
    }
  }

  if (this.$toggle) this.$toggle.addEventListener('click', this.handleToggleClick.bind(this))
  if (this.$prevBtn) this.$prevBtn.addEventListener('click', this.handlePrevMonth.bind(this))
  if (this.$nextBtn) this.$nextBtn.addEventListener('click', this.handleNextMonth.bind(this))
  if (this.$cancelBtn) this.$cancelBtn.addEventListener('click', this.close.bind(this))
  if (this.$todayBtn) this.$todayBtn.addEventListener('click', this.handleTodayClick.bind(this))
  
  // Date selection delegator
  if (this.$gridBody) {
    this.$gridBody.addEventListener('click', this.handleDateClick.bind(this))
    this.$gridBody.addEventListener('keydown', this.handleGridKeyDown.bind(this))
  }

  // Close on escape
  this.$module.addEventListener('keydown', (e) => {
    const isHidden = this.$dialog.hidden || this.$dialog.hasAttribute('hidden')
    if (!isHidden && e.key === 'Escape') {
      this.close()
      this.$toggle.focus()
      e.preventDefault()
    }
  })

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (this.$dialog && !this.$dialog.hasAttribute('hidden') && !this.$module.contains(e.target)) {
      this.close()
    }
  })
}

LBCamdenCalendarPicker.prototype.handleToggleClick = function (e) {
  if (this.$dialog.hasAttribute('hidden')) {
    this.open()
  } else {
    this.close()
  }
}

LBCamdenCalendarPicker.prototype.open = function () {
  this.$dialog.removeAttribute('hidden')
  this.$toggle.setAttribute('aria-expanded', 'true')
  this.renderCalendar(this.currentDate)
  
  const focusTarget = this.$gridBody.querySelector('[aria-pressed="true"]') || this.$gridBody.querySelector('[tabindex="0"]') || this.$gridBody.querySelector('button')
  if (focusTarget) {
    setTimeout(() => focusTarget.focus(), 50) 
  }
}

LBCamdenCalendarPicker.prototype.close = function () {
  this.$dialog.setAttribute('hidden', '')
  this.$toggle.setAttribute('aria-expanded', 'false')
}

LBCamdenCalendarPicker.prototype.renderCalendar = function (date) {
  this.$gridBody.innerHTML = ''
  
  const year = date.getFullYear()
  const month = date.getMonth()
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  this.$monthYear.textContent = `${monthNames[month]} ${year}`
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  
  let startDay = firstDay.getDay() - 1
  if (startDay === -1) startDay = 6 
  
  let html = '<tr>'
  
  for (let i = 0; i < startDay; i++) {
    html += '<td></td>'
  }
  
  const today = new Date()
  
  for (let d = 1; d <= daysInMonth; d++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` // YYYY-MM-DD
    
    // Check selection using date string comparison to avoid time issues
    let isSelected = false
    if (this.selectedDate) {
      const selectedString = `${this.selectedDate.getFullYear()}-${String(this.selectedDate.getMonth() + 1).padStart(2, '0')}-${String(this.selectedDate.getDate()).padStart(2, '0')}`
      if (dateString === selectedString) isSelected = true
    }
    
    let isToday = (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year)
    
    let tabindex = -1
    if (d === this.currentDate.getDate()) {
       tabindex = 0
    }

    html += `<td>
      <button type="button" 
        class="lbcamden-calendar-picker__date" 
        data-date="${dateString}" 
        tabindex="${tabindex}" 
        aria-pressed="${isSelected}"
        ${isToday ? 'aria-current="date"' : ''}
        aria-label="${d} ${monthNames[month]} ${year}">
        ${d}
      </button>
    </td>`
    
    if ((startDay + d) % 7 === 0) {
      html += '</tr><tr>'
    }
  }
  
  html += '</tr>'
  this.$gridBody.innerHTML = html
}

LBCamdenCalendarPicker.prototype.handlePrevMonth = function () {
  this.currentDate.setMonth(this.currentDate.getMonth() - 1)
  this.renderCalendar(this.currentDate)
}

LBCamdenCalendarPicker.prototype.handleNextMonth = function () {
  this.currentDate.setMonth(this.currentDate.getMonth() + 1)
  this.renderCalendar(this.currentDate)
}

LBCamdenCalendarPicker.prototype.handleTodayClick = function () {
  const today = new Date()
  this.currentDate = new Date(today)
  this.renderCalendar(this.currentDate)
  setTimeout(() => {
     const todayBtn = this.$gridBody.querySelector('[aria-current="date"]')
     if (todayBtn) todayBtn.focus()
  }, 0)
}

LBCamdenCalendarPicker.prototype.handleDateClick = function (e) {
  const btn = e.target.closest('button')
  if (!btn) return
  
  const dateStr = btn.getAttribute('data-date') // YYYY-MM-DD
  const parts = dateStr.split('-')
  const date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10))
  
  this.selectDate(date)
}

LBCamdenCalendarPicker.prototype.selectDate = function (date) {
  this.selectedDate = date
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  
  this.$input.value = `${day}/${month}/${year}`
  this.close()
  this.$toggle.focus()
}

LBCamdenCalendarPicker.prototype.handleGridKeyDown = function (e) {
  const btn = e.target.closest('button')
  if (!btn) return
  
  const dateStr = btn.getAttribute('data-date')
  const parts = dateStr.split('-')
  let date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10))
  let newDate = null

  switch (e.keyCode) {
    case KEY_CODES.LEFT:
      newDate = new Date(date)
      newDate.setDate(date.getDate() - 1)
      e.preventDefault()
      break
    case KEY_CODES.RIGHT:
      newDate = new Date(date)
      newDate.setDate(date.getDate() + 1)
      e.preventDefault()
      break
    case KEY_CODES.UP:
      newDate = new Date(date)
      newDate.setDate(date.getDate() - 7)
      e.preventDefault()
      break
    case KEY_CODES.DOWN:
      newDate = new Date(date)
      newDate.setDate(date.getDate() + 7)
      e.preventDefault()
      break
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACE:
      this.selectDate(date)
      e.preventDefault()
      return
  }

  if (newDate) {
    this.currentDate = newDate
    this.renderCalendar(newDate)
    
    setTimeout(() => {
        const buttons = this.$gridBody.querySelectorAll('button')
        const dayToFind = newDate.getDate()
        const btn = Array.from(buttons).find(b => parseInt(b.textContent) === dayToFind)
        if (btn) btn.focus()
    }, 0)
  }
}

export default LBCamdenCalendarPicker
