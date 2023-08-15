export default function LBCamdenGuideHeader ($module) {
  this.$module = $module
}

LBCamdenGuideHeader.prototype.init = function () {
  if (!this.$module) {
    return
  }

  window.addEventListener('hashchange', this.updateActiveLink.bind(this))
  this.updateActiveLink()
}

LBCamdenGuideHeader.prototype.updateActiveLink = function () {
  let i = 0

  for (const link of this.getLinks()) {
    if (i === 0 && !window.location.hash) {
      link.classList.toggle(':active', true)
    } else {
      const fullUrl = new URL(link.href, window.location.href)
      const isActive = fullUrl.href === window.location.href

      link.classList.toggle(':active', isActive)
    }

    i += 1
  }
}

LBCamdenGuideHeader.prototype.getLinks = function () {
  return this.$module.querySelectorAll('.govuk-link')
}
