const waitTime = 500;
const viewports = { "desktop": 'macbook-13', "mobile": 'iphone-6+' };
const domain = Cypress.env('domain') || 'http://localhost:3000';
import headerFocusTests from '../fixtures/headerFocus'
import footerFocusTests from '../fixtures/footerFocus'

const testInstantiator = (testData) => {
  Object.keys(testData).forEach(test => {
    Object.keys(testData[test].tests).forEach(currentTest => {
      Object.keys(testData[test].tests[currentTest]).forEach(viewport => {
        it(`should display focus states for ${test} ${currentTest} for ${viewport}`, () => {
          cy.viewport(viewports[viewport]);
          cy.visit(domain + testData[test].url);
          cy.window().focus();
          cy.wait(waitTime);
          testData[test].tests[currentTest][viewport].forEach(testAction => {
            cy.wait(waitTime);
            switch (testAction) {
              case 'tab':
                cy.realPress('Tab');
                cy.wait(waitTime);
                break;
              case 'enter':
                cy.realPress('Enter');
                cy.wait(waitTime);
                break;
              default:
                throw new Error('unknown action');
            }
          })
        })
      })
    })
  })
}

describe('Focus tests', () => {
  testInstantiator(headerFocusTests);
  testInstantiator(footerFocusTests);
})