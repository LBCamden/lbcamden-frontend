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
  console.log(123);
  // this.$menuButton = $module && $module.querySelector('.govuk-js-header-toggle')
  // this.$menu = this.$menuButton && $module.querySelector(
  //   '#' + this.$menuButton.getAttribute('aria-controls')
  // )
}

return LBCamdenHeader;

})));
