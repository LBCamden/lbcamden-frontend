(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend.Card', factory) :
	(global.GOVUKFrontend = global.GOVUKFrontend || {}, global.GOVUKFrontend.Card = factory());
}(this, (function () { 'use strict';

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

return LBCamdenCard;

})));
