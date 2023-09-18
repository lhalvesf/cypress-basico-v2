// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.get('input[name="firstName"]')
        .type('Luiz', {delay: 0})
        .should('have.value', 'Luiz')

        cy.get('input[name="lastName"]')
        .type('Ferreira')
        .should('have.value', 'Ferreira')
        
        cy.get('input[id="email"]')
        .type('lh.alvesf@gmail.com')
        .should('have.value', 'lh.alvesf@gmail.com')

        cy.get('textarea[name="open-text-area"]')
        .type('Minha mensagem')
        .should('have.value', 'Minha mensagem')
        
        cy.get('button[type="submit"]')
        .click()
        
        cy.get('span[class="success"]').should('be.visible')
        
        cy.get('span[class="success"] > strong').should('have.text', 'Mensagem enviada com sucesso.')

})

