function LBCamdenGuideContent ($module) {
  this.$module = $module
  this.headingTarget = this.$module && this.$module.dataset.headingTarget
}

LBCamdenGuideContent.prototype.init = function () {
  if (!this.$module) {
    return
  }

  window.addEventListener('hashchange', this.showActiveGuide.bind(this))
  this.showActiveGuide()
}

LBCamdenGuideContent.prototype.showActiveGuide = function ({ scrollIntoView } = {}) {
  if (!this.$module) {
    return
  }

  if (!window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname + window.location.search)
  }

  const targets = this.getTargets()
  if (targets.length === 0) {
    return
  }

  const headingTarget = this.getHeadingTarget()

  let i = 0
  const activeItem = this.getActiveItem()

  for (const item of targets) {
    const shouldShow = item === activeItem

    if (shouldShow) {
      if (headingTarget) {
        headingTarget.innerText = item.getAttribute('aria-label')
      }

      const prev = targets[i - 1]
      const next = targets[i + 1]

      this.setPagination({ next, prev })
    }

    item.classList.toggle('lbcamden-guide-content__item--active', shouldShow)

    i += 1
  }

  if (activeItem && window.location.hash) {
    if (headingTarget) {
      headingTarget.scrollIntoView({ block: 'start' })
    } else {
      this.$module.scrollIntoView({ block: 'start' })
    }
  }

  if (!activeItem) {
    const notFound = this.getNotFound()

    if (headingTarget) {
      headingTarget.innerText = notFound.getAttribute('aria-label')
    }

    notFound.classList.toggle('lbcamden-guide-content__item--active', true)

    this.setPagination({ next: targets[0] })
  }
}

LBCamdenGuideContent.prototype.getTargets = function () {
  return this.$module.querySelectorAll('.lbcamden-guide-content__item[id]')
}

LBCamdenGuideContent.prototype.setPagination = function ({ next, prev }) {
  const [prevTarget, nextTarget] = this.getPaginationTargets()

  prevTarget.querySelector('.govuk-pagination__link-label').innerText = prev && prev.getAttribute('aria-label')
  nextTarget.querySelector('.govuk-pagination__link-label').innerText = next && next.getAttribute('aria-label')

  prevTarget.querySelector('.govuk-pagination__link').href = prev && `#${prev.id}`
  nextTarget.querySelector('.govuk-pagination__link').href = next && `#${next.id}`

  this.$module.classList.toggle('lbcamden-guide-content--prev', !!prev)
  this.$module.classList.toggle('lbcamden-guide-content--next', !!next)
}

LBCamdenGuideContent.prototype.getHeadingTarget = function () {
  if (!this.headingTarget) {
    return
  }

  return this.$module.ownerDocument.querySelector(this.headingTarget)
}

LBCamdenGuideContent.prototype.getActiveItem = function () {
  const targets = this.getTargets()
  const id = window.location.hash.substring(1)

  if (!id) {
    return targets[0]
  }

  for (const t of targets) {
    if (t.id === id) {
      return t
    }
  }
}

LBCamdenGuideContent.prototype.getPaginationTargets = function () {
  return [
    this.$module.querySelector('.govuk-pagination__prev'),
    this.$module.querySelector('.govuk-pagination__next')
  ]
}

LBCamdenGuideContent.prototype.getNotFound = function () {
  return this.$module.querySelector('.lbcamden-guide-content__item[data-guide-not-found]')
}

export default LBCamdenGuideContent
