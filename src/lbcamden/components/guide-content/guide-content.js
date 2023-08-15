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

LBCamdenGuideContent.prototype.showActiveGuide = function () {
  if (!this.$module) {
    return
  }

  window.scrollTo({ top: 0 })
  const targets = this.getTargets()
  const headingTarget = this.getHeadingTarget()
  const [prevTarget, nextTarget] = this.getPaginationTargets()

  const id = targets.length > 0 ? (window.location.hash.substring(1) || targets[0].id) : undefined
  let i = 0

  for (const item of targets) {
    const shouldShow = Boolean(id && item.id === id)

    if (shouldShow) {
      if (headingTarget) {
        headingTarget.innerText = item.getAttribute('aria-label')
      }

      const prev = targets[i - 1]
      const next = targets[i + 1]

      prevTarget.querySelector('.govuk-pagination__link-label').innerText = prev && prev.getAttribute('aria-label')
      nextTarget.querySelector('.govuk-pagination__link-label').innerText = next && next.getAttribute('aria-label')

      prevTarget.querySelector('.govuk-pagination__link').href = prev && `#${prev.id}`
      nextTarget.querySelector('.govuk-pagination__link').href = next && `#${next.id}`

      this.$module.classList.toggle('lbcamden-guide-content--prev', !!prev)
      this.$module.classList.toggle('lbcamden-guide-content--next', !!next)
    }

    item.classList.toggle('lbcamden-guide-content__item--active', shouldShow)

    i += 1
  }
}

LBCamdenGuideContent.prototype.getTargets = function () {
  return this.$module.querySelectorAll('.lbcamden-guide-content__item[id]')
}

LBCamdenGuideContent.prototype.getHeadingTarget = function () {
  if (!this.headingTarget) {
    return
  }

  return this.$module.ownerDocument.querySelector(this.headingTarget)
}

LBCamdenGuideContent.prototype.getPaginationTargets = function () {
  return [
    this.$module.querySelector('.govuk-pagination__prev'),
    this.$module.querySelector('.govuk-pagination__next')
  ]
}

export default LBCamdenGuideContent
