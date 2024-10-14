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

// cypress/support/commands.js

Cypress.Commands.add('createExpense', (sid) => {
    cy.request({
        method: 'POST',
        url: 'https://qauto.forstudy.space/api/expenses',
        headers: {
            Cookie: `sid=${sid}`
        },
        body: {
            car_Brand_Id: carBrandId,
            car_Model_Id: carModelId,
            mileage: mileage
        }
    }).then((response) => {
        expect(response.status).to.equal(201);
        cy.wrap(response.body).as('createExpenseResponse');
    });
});
