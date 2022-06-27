function LBCamdenCard ($module) {
  this.$module = $module
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
    console.log('Card init')
  }
  // if (this.$module.classList.contains('LBCamden-Card--clickable')) {
  //   this.handleClickable()
  // }
}

// LBCamdenCard.prototype.handleClickable = function () {
//   if (this.$module.querySelector('a') !== null) {
//     this.$module.addEventListener('click', () => {
//       this.$module.querySelector('a').click()
//     })
//   }
// }

export default LBCamdenCard
