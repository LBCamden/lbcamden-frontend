(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('govuk-frontend/govuk/vendor/polyfills/Event.mjs'), require('govuk-frontend/govuk/vendor/polyfills/Function/prototype/bind.mjs')) :
	typeof define === 'function' && define.amd ? define('LBCamdenFrontend', ['exports', 'govuk-frontend/govuk/vendor/polyfills/Event.mjs', 'govuk-frontend/govuk/vendor/polyfills/Function/prototype/bind.mjs'], factory) :
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

var KEY_SPACE = 32;
var DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

function Button ($module) {
  this.$module = $module;
  this.debounceFormSubmitTimer = null;
}

/**
* JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
*
* Created since some Assistive Technologies (for example some Screenreaders)
* will tell a user to press space on a 'button', so this functionality needs to be shimmed
* See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
*
* @param {object} event event
*/
Button.prototype.handleKeyDown = function (event) {
  // get the target element
  var target = event.target;
  // if the element has a role='button' and the pressed key is a space, we'll simulate a click
  if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
    event.preventDefault();
    // trigger the target's click event
    target.click();
  }
};

/**
* If the click quickly succeeds a previous click then nothing will happen.
* This stops people accidentally causing multiple form submissions by
* double clicking buttons.
*/
Button.prototype.debounce = function (event) {
  var target = event.target;
  // Check the button that is clicked on has the preventDoubleClick feature enabled
  if (target.getAttribute('data-prevent-double-click') !== 'true') {
    return
  }

  // If the timer is still running then we want to prevent the click from submitting the form
  if (this.debounceFormSubmitTimer) {
    event.preventDefault();
    return false
  }

  this.debounceFormSubmitTimer = setTimeout(function () {
    this.debounceFormSubmitTimer = null;
  }.bind(this), DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
};

/**
* Initialise an event listener for keydown at document level
* this will help listening for later inserted elements with a role="button"
*/
Button.prototype.init = function () {
  this.$module.addEventListener('keydown', this.handleKeyDown);
  this.$module.addEventListener('click', this.debounce);
};

function LBCamdenCard ($module) {
  this.$module = $module;
}

//
// /**
//  * Initialise card
//  *
//  * Check for the presence of a card – if any are
//  * missing then there's nothing to do so return early.
//  */
LBCamdenCard.prototype.init = function () {
  if (!this.$module) {
    return false
  } else {
    console.log('Card init');
  }
  // if (this.$module.classList.contains('LBCamden-Card--clickable')) {
  //   this.handleClickable()
  // }
};

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

  var $LBCamdenButtons = scope.querySelectorAll('[data-module="lbcamden-button"]');
  nodeListForEach($LBCamdenButtons, function ($LBCamdenButton) {
    new Button($LBCamdenButton).init();
  });

  // var $LBCamdenCards = scope.querySelectorAll('[data-module="lbcamden-card"]')
  // nodeListForEach($LBCamdenCards, function ($LBCamdenCard) {
  //   new LBCamdenCard($LBCamdenCard).init()
  // })
}

exports.initAll = initAll;
exports.LBCamdenButton = Button;
exports.LBCamdenCard = LBCamdenCard;
exports.LBCamdenHeader = LBCamdenHeader;

})));
