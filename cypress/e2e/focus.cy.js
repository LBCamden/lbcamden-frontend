describe('Header focus test', () => {
    it('should display focus states for each top level link', () => {
        cy.viewport("macbook-13");
        cy.visit('http://localhost:3000/components/header/with-mixed-levels-of-navigation/preview');
        cy.window().focus();
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
    })

    it('should display focus states for second level links and components', () => {
        cy.viewport("macbook-13");
        cy.visit('http://localhost:3000/components/header/with-mixed-levels-of-navigation/preview');
        cy.window().focus();
        cy.realPress('Tab');
        cy.realPress('Tab');
        cy.realPress('Tab');
        cy.focused().realPress('Enter');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
        cy.realPress('Tab');
        cy.wait(500)
    })

    //should i do one for the search section?
})