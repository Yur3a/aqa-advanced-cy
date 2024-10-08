import HomePage from "../../../page-objects/pages/homePage";
import RegistrationForm from "../../../page-objects/components/forms/registrationForm";


describe('Sign up tests', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.openRegistrationForm();
    })

    it('Should register New user', () => {
        const uniqueEmail = `test+${Date.now()}@example.com`;

        RegistrationForm.fillAllFields(
            'John',
            'Doe',
            uniqueEmail,
            'Password123!',
            'Password123!'
        )
        RegistrationForm.clickRegisterButton();

        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        cy.contains('You don’t have any cars in your garage').should('be.visible');
    });
});
