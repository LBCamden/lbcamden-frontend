(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend.Header', factory) :
	(global.GOVUKFrontend = global.GOVUKFrontend || {}, global.GOVUKFrontend.Header = factory());
}(this, (function () { 'use strict';

// import '../../vendor/polyfills/Event'
// import '../../vendor/polyfills/Element/prototype/classList'
// import '../../vendor/polyfills/Function/prototype/bind'

function LBCamdenHeader ($module) {
  this.$module = $module;
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
  console.log(123);
};

return LBCamdenHeader;

})));
