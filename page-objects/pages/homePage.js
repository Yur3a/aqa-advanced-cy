/// <reference types="cypress" />

class HomePage {
    get registrationButton() {
        return cy.get('.hero-descriptor_btn');
    }

    open() {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    }

    openRegistrationForm() {
        this.registrationButton.click();
        cy.get('.modal-title').should('have.text', 'Registration');
    }
}

export default new HomePage();