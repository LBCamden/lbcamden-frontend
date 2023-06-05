(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('node_modules/govuk-frontend/govuk/vendor/polyfills/Event.mjs'), require('node_modules/govuk-frontend/govuk/vendor/polyfills/Function/prototype/bind.mjs')) :
	typeof define === 'function' && define.amd ? define('LBCamdenFrontend', ['exports', 'node_modules/govuk-frontend/govuk/vendor/polyfills/Event.mjs', 'node_modules/govuk-frontend/govuk/vendor/polyfills/Function/prototype/bind.mjs'], factory) :
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

const settings = {
  minWidth: '40.0625em',
  desktop: '48em'
};

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

function LBCamdenHeader ($module) {
  this.$module = $module;
  this.$navigationToggle = this.$module.querySelector('#super-navigation-menu-toggle');
  this.$navigationMenu = this.$module.querySelector('#super-navigation-menu');
  this.$searchToggle = this.$module.querySelector('#super-search-menu-toggle');
  this.$searchMenu = this.$module.querySelector('#super-search-menu');
  this.$buttons = this.$module.querySelectorAll('button[aria-controls][data-toggle-mobile-group][data-toggle-desktop-group]');
  this.$menuButtons = this.$module.querySelectorAll('.lbcamden-header__navigation-item--with-children');
  this.$phaseBanner = document.querySelector('.govuk-phase-banner');
  this.$header = document.querySelector('.lbcamden-header');
  // this.$menuButtons = this.$module.querySelectorAll('.lbcamden-header__navigation-second-toggle-button')
  this.hiddenButtons = this.$module.querySelectorAll('button[hidden]');
  this.menuOpen = false;
  this.searchOpen = false;
  this.lastWindowSize = null;
}

LBCamdenHeader.prototype.init = function () {
  if (!this.$module) {
    return
  }
  this.$module.classList.add('js-module-initialised');
  if (typeof window.matchMedia === 'function') {
    this.setupResponsiveChecks();
  }
};

LBCamdenHeader.prototype.setupResponsiveChecks = function () {
  this.mql = window.matchMedia('(min-width: ' + settings.desktop + ')');
  this.mql.addListener(this.checkMode.bind(this));
  this.checkMode();
};

LBCamdenHeader.prototype.checkMode = function () {
  if (this.mql.matches) {
    this.teardownMobileMenu();
    this.setupDesktopMenu();
  } else {
    this.teardownDesktopMenu();
    this.setupMobileMenu();
  }
};

LBCamdenHeader.prototype.setupMobileMenu = function () {
  this.setAttributes('mobile');
  if (this.$navigationMenu != null) {
    this.$navigationToggle.boundMenuClick = this.handleMenuButtonClick.bind(this);
    this.$navigationToggle.addEventListener('click', this.$navigationToggle.boundMenuClick, true);
  }
  if (this.$searchMenu != null) {
    this.$searchToggle.boundSearchClick = this.handleSearchButtonClick.bind(this);
    this.$searchToggle.addEventListener('click', this.$searchToggle.boundSearchClick, true);
  }
};

LBCamdenHeader.prototype.teardownMobileMenu = function () {
  this.unsetAttributes('mobile');
  if (this.$navigationMenu != null) {
    this.$navigationToggle.removeEventListener('click', this.$navigationToggle.boundMenuClick, true);
  }
  if (this.$searchMenu != null) {
    this.$searchToggle.removeEventListener('click', this.$searchToggle.boundSearchClick, true);
  }
};

LBCamdenHeader.prototype.setupDesktopMenu = function () {
  this.setAttributes('desktop');
  if (this.$searchMenu != null) {
    this.$searchToggle.boundSearchClick = this.handleSearchButtonClick.bind(this);
    this.$searchToggle.addEventListener('click', this.$searchToggle.boundSearchClick, true);
  }
};

LBCamdenHeader.prototype.teardownDesktopMenu = function () {
  this.unsetAttributes('desktop');
  if (this.$navigationMenu != null) {
    this.$navigationToggle.removeEventListener('click', this.$navigationToggle.boundMenuClick, true);
  }
  if (this.$searchMenu != null) {
    this.$searchToggle.removeEventListener('click', this.$searchToggle.boundSearchClick, true);
  }
};

LBCamdenHeader.prototype.menuItemClick = function (e) {
  let theTargetID = e.target.getAttribute('aria-controls');
  if (theTargetID == null) {
    theTargetID = e.target.parentNode.getAttribute('aria-controls');
    e.target.parentNode.classList.toggle('lbcamden-header__open-button');
  } else {
    e.target.classList.toggle('lbcamden-header__open-button');
  }
  this.$module.querySelectorAll('.lbcamden-header__navigation-second-toggle-button:not([aria-controls=' + theTargetID + '])').forEach(i => i.classList.remove('lbcamden-header__open-button'));
  const theTarget = document.getElementById(theTargetID);
  this.$module.querySelectorAll('.lbcamden-header__navigation-dropdown-menu:not(#' + theTargetID + ')').forEach(i => i.setAttribute('hidden', true));
  document.getElementById(theTargetID).getAttribute('hidden') != null ? document.getElementById(theTargetID).removeAttribute('hidden') : document.getElementById(theTargetID).setAttribute('hidden', 'true');
  if (this.mql.matches === true) {
    this.$module.style.marginBottom = theTarget.offsetHeight + 'px';
  }
  if (this.$searchMenu != null) {
    this.closeSearch(this.$searchToggle, this.$searchMenu);
  }
};

LBCamdenHeader.prototype.setAttributes = function ($type) {
  if ($type === 'mobile') {
    if (this.$navigationMenu != null) {
      this.$navigationToggle.removeAttribute('hidden');
      this.$navigationToggle.setAttribute('aria-expanded', false);
      this.$navigationMenu.setAttribute('hidden', true);
    }
  }
  if (this.$searchMenu != null) {
    this.$searchMenu.setAttribute('hidden', true);
    this.$searchToggle.setAttribute('aria-expanded', false);
    this.$searchToggle.setAttribute('aria-label', 'Show search menu');
    this.$module.querySelector('.lbcamden-header__search-item-link').setAttribute('hidden', true);
    this.$module.querySelector('.lbcamden-header__search-and-popular').removeAttribute('hidden');
    this.$searchToggle.removeAttribute('hidden');
  }
  nodeListForEach(this.$menuButtons, function ($button) {
    $button.querySelector('.lbcamden-header__navigation-item-link').setAttribute('hidden', true);
    $button.querySelector('.lbcamden-header__navigation-second-toggle-button').removeAttribute('hidden');
    // Save bounded functions to use when removing event listeners during teardown
    $button.boundMenuItemClick = this.menuItemClick.bind(this);
    // Handle events
    $button.querySelector('button').addEventListener('click', $button.boundMenuItemClick, true);
  }.bind(this));
};

LBCamdenHeader.prototype.unsetAttributes = function ($type) {
  if ($type === 'mobile') {
    if (this.$navigationMenu != null) {
      this.$navigationToggle.setAttribute('hidden', true);
      this.$navigationMenu.removeAttribute('hidden');
    }
    if (this.$searchMenu != null) {
      this.$searchToggle.setAttribute('hidden', true);
      this.$searchMenu.removeAttribute('hidden');
    }
  }
  this.$module.style.marginBottom = '0px';
  this.searchOpen = false;
  this.menuOpen = false;
  if (this.$navigationMenu != null) {
    this.closeDesktopMenus();
  }
  if (this.$searchMenu != null) {
    this.$searchToggle.classList.remove('lbcamden-header__open-button');
  }
  nodeListForEach(this.$menuButtons, function ($button) {
    $button.querySelector('button').removeEventListener('click', $button.boundMenuItemClick, true);
  });
};

LBCamdenHeader.prototype.handleMenuButtonClick = function () {
  if (this.menuOpen === true) {
    this.closeMenu(this.$navigationToggle, this.$navigationMenu);
  } else {
    this.openMenu(this.$navigationToggle, this.$navigationMenu);
  }
};

LBCamdenHeader.prototype.handleSearchButtonClick = function () {
  if (this.searchOpen === true) {
    this.closeSearch(this.$searchToggle, this.$searchMenu);
    if (this.mql.matches === true) {
      this.$module.style.marginBottom = '0';
    }
  } else {
    this.openSearch(this.$searchToggle, this.$searchMenu);
    if (this.mql.matches === true) {
      this.$module.style.marginBottom = (this.$searchMenu.offsetHeight - 10) + 'px';
    }
  }
};

LBCamdenHeader.prototype.openMenu = function ($button, $target) {
  this.menuOpen = true;
  $button.classList.add('lbcamden-header__open-button');
  $button.setAttribute('aria-expanded', !0);
  $button.setAttribute('aria-label', 'Hide navigation menu');
  $button.classList.add('lbcamden-header__open-button');
  $target.removeAttribute('hidden');
  if (this.$searchMenu != null) {
    this.closeSearch(this.$searchToggle, this.$searchMenu);
  }
};

LBCamdenHeader.prototype.closeMenu = function ($button, $target) {
  this.menuOpen = false;
  this.$module.style.marginBottom = '0px';
  if (this.$navigationMenu != null) {
    $button.classList.remove('lbcamden-header__open-button');
    $button.setAttribute('aria-expanded', !1);
    $button.setAttribute('aria-label', 'Show navigation menu');
    $button.classList.remove('lbcamden-header__open-button');
    $target.setAttribute('hidden', !0);
  }
};

LBCamdenHeader.prototype.closeDesktopMenus = function () {
  this.$module.querySelectorAll('.lbcamden-header__navigation-dropdown-menu').forEach(x => x.setAttribute('hidden', true));
};

LBCamdenHeader.prototype.openSearch = function ($button, $target) {
  this.searchOpen = true;
  $button.setAttribute('aria-expanded', !0);
  $button.setAttribute('aria-label', 'Hide navigation menu');
  this.$module.querySelectorAll('.lbcamden-header__open-button').forEach(x => x.classList.remove('lbcamden-header__open-button'));
  $button.classList.add('lbcamden-header__open-button');
  $target.removeAttribute('hidden');
  // document.getElementById('lbs-search__box').focus()
  if (this.mql.matches !== true) {
    this.closeMenu(this.$navigationToggle, this.$navigationMenu);
  } else {
    this.closeDesktopMenus();
  }
};

LBCamdenHeader.prototype.closeSearch = function ($button, $target) {
  this.searchOpen = false;
  $button.setAttribute('aria-expanded', !1);
  $button.setAttribute('aria-label', 'Show navigation menu');
  $button.classList.remove('lbcamden-header__open-button');
  $target.setAttribute('hidden', !0);
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
}

exports.initAll = initAll;
exports.LBCamdenButton = Button;
exports.LBCamdenHeader = LBCamdenHeader;

})));
