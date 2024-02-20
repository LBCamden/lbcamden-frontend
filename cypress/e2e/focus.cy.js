const waitTime = 500;
const viewports = { "desktop": 'macbook-13', "mobile": 'iphone-6+' };
const domain = 'http://localhost:3000'
const focusTests = {
  "header": {
    "url": '/components/header/with-mixed-levels-of-navigation/preview',
    "tests": {
      "top level links": {
        "desktop": ['tab', 'tab', 'tab', 'tab', 'tab'],
        "mobile": ['tab', 'tab', 'enter', 'tab', 'tab', 'tab', 'tab', 'enter', 'tab', 'tab']
      },
      "second level links": {
        "desktop": ['tab', 'tab', 'tab', 'enter', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'enter', 'tab', 'tab'],
        "mobile": ['tab', 'tab', 'enter', 'tab', 'tab', 'tab', 'tab', 'enter', 'tab', 'tab']
      }
    }
  },
  "footer": {
    "url": '/components/footer/with-primary,-secondary-and-utility-navigation,-sponsor-image-and-social-navigation/preview',
    "tests": {
      "links": {
        "desktop": ['tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab'],
        "mobile": ['tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab']
      }
    }
  }
};

describe('Focus tests', () => {
  Object.keys(focusTests).forEach(test => {
    Object.keys(focusTests[test].tests).forEach(currentTest => {
      Object.keys(focusTests[test].tests[currentTest]).forEach(viewport => {
        it(`should display focus states for ${test} ${currentTest} for ${viewport}`), () => {
          cy.viewport(viewports[viewport])
          cy.visit(domain + focusTests[test].url)
          cy.window().focus();
          cy.wait(500)
          focusTests[test].tests[currentTest][viewport].forEach(testAction => {
            switch (testAction) {
              case 'tab':
                cy.realPress('Tab');
                cy.wait(500)
                break;
              case 'enter':
                cy.realPress('Enter');
                cy.wait(500)
                break;
              default:
                //throw exception
                console.log('unknown action')
                break;
            }
          }
          )
        }
      })
    })
  })
})