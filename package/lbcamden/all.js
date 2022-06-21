(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('LBCamdenFrontend', ['exports'], factory) :
	(factory((global.LBCamdenFrontend = {})));
}(this, (function (exports) { 'use strict';

/**
 * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
 * This seems to fail in IE8, requires more investigation.
 * See: https://github.com/imagitama/nodelist-foreach-polyfill
 */
function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes);
  }
}

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

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {};

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document;

  var $LBCamdenHeaders = scope.querySelectorAll('[data-module="lbcamden-header"]');
  nodeListForEach($LBCamdenHeaders, function ($LBCamdenHeader) {
    new LBCamdenHeader($LBCamdenHeader).init();
  });
}

exports.initAll = initAll;
exports.LBCamdenHeader = LBCamdenHeader;

})));
