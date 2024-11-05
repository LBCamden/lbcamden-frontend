import * as govuk from "govuk-frontend"

import { nodeListForEach } from './common.js'
import LBCamdenButton from './components/button/button.js'
import LBCamdenGuideContent from './components/guide-content/guide-content.js'
import LBCamdenGuideHeader from './components/guide-header/guide-header.js'
import LBCamdenHeader from './components/header/header.js'

function initAll () {
  govuk.initAll()

  var $LBCamdenHeaders = document.querySelectorAll('[data-module="lbcamden-header"]')
  nodeListForEach($LBCamdenHeaders, function ($LBCamdenHeader) {
    new LBCamdenHeader($LBCamdenHeader).init()
  })

  var $LBCamdenButtons = document.querySelectorAll('[data-module="lbcamden-button"]')
  nodeListForEach($LBCamdenButtons, function ($LBCamdenButton) {
    new LBCamdenButton($LBCamdenButton).init()
  })

  var $LBCamdenGuideContents = document.querySelectorAll('[data-module="lbcamden-guide-content"]')
  nodeListForEach($LBCamdenGuideContents, function ($LBCamdenGuideContent) {
    new LBCamdenGuideContent($LBCamdenGuideContent).init()
  })

  var $LBCamdenGuideHeaders = document.querySelectorAll('[data-module="lbcamden-guide-header"]')
  nodeListForEach($LBCamdenGuideHeaders, function ($LBCamdenGuideHeader) {
    new LBCamdenGuideHeader($LBCamdenGuideHeader).init()
  })
}

export {
  LBCamdenButton,
  LBCamdenGuideContent,
  LBCamdenGuideHeader,
  LBCamdenHeader,
  initAll
}
