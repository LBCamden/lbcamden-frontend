// import '../../vendor/polyfills/Event'
// import '../../vendor/polyfills/Element/prototype/classList'
// import '../../vendor/polyfills/Function/prototype/bind'

function LBCamdenHeader ($module) {
  this.$module = $module
  // this.$menuButton = $module && $module.querySelector('.govuk-js-header-toggle')
  // this.$menu = this.$menuButton && $module.querySelector(
  //   '#' + this.$menuButton.getAttribute('aria-controls')
  // )
}
//
// /**
//  * Initialise header
//  *
//  * Check for the presence of the header, menu and menu button – if any are
//  * missing then there's nothing to do so return early.
//  */
LBCamdenHeader.prototype.init = function () {
  // console.log(123)
}
//
//   this.syncState(this.$menu.classList.contains('govuk-header__navigation-list--open'))
//   this.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this))
// }
//
// /**
//  * Sync menu state
//  *
//  * Sync the menu button class and the accessible state of the menu and the menu
//  * button with the visible state of the menu
//  *
//  * @param {boolean} isVisible Whether the menu is currently visible
//  */
// LBCamdenHeader.prototype.syncState = function (isVisible) {
//   this.$menuButton.classList.toggle('govuk-header__menu-button--open', isVisible)
//   this.$menuButton.setAttribute('aria-expanded', isVisible)
// }
//
// /**
//  * Handle menu button click
//  *
//  * When the menu button is clicked, change the visibility of the menu and then
//  * sync the accessibility state and menu button state
//  */
// LBCamdenHeader.prototype.handleMenuButtonClick = function () {
//   var isVisible = this.$menu.classList.toggle('govuk-header__navigation-list--open')
//   this.syncState(isVisible)
// }

export default LBCamdenHeader
