import HomePage from "../../../page-objects/pages/homePage";
import RegistrationForm from "../../../page-objects/components/forms/registrationForm";
import registrationForm from "../../../page-objects/components/forms/registrationForm";


describe('Registration form tests', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.openRegistrationForm();
    });

    it('Should show "Name is invalid" for wrong data', () => {
        RegistrationForm.fillNameField(1234);
        cy.get('form').should('contain.text', 'Name is invalid');
    });

    it('Should show "Name required"', () => {
        RegistrationForm.clickNameField();
        RegistrationForm.clickLastNameField();
        cy.get('form').should('contain.text', 'Name required');
    });

    it('Should show "Name has to be from 2 to 20 characters long" for short name', () => {
        RegistrationForm.fillNameField('n');
        cy.get('form').should('contain.text', 'Name has to be from 2 to 20 characters long');
    });

    it('Should show "Name has to be from 2 to 20 characters long" for long name', () => {
        RegistrationForm.fillNameField('LoremIpsumDolorSitAmet');
        cy.get('form').should('contain.text', 'Name has to be from 2 to 20 characters long');
    });

    it('Should show "Last name is invalid" for wrong data', () => {
        RegistrationForm.fillLastNameField('1234');
        cy.get('form').should('contain.text', 'Last name is invalid');
    });

    it('Should show "Last name required"', () => {
        RegistrationForm.clickLastNameField();
        RegistrationForm.clickNameField();
        cy.get('form').should('contain.text', 'Last name required');
    });

    it('Should show "Last name has to be from 2 to 20 characters long" for short name', () => {
        RegistrationForm.fillLastNameField('n');
        cy.get('form').should('contain.text', 'Last name has to be from 2 to 20 characters long');
    });

    it('Should show "Last name has to be from 2 to 20 characters long" for long name', () => {
        RegistrationForm.fillLastNameField('LoremIpsumDolorSitAmet');
        cy.get('form').should('contain.text', 'Last name has to be from 2 to 20 characters long');
    });

    it('Should show "Email required" for empty email', () => {
        registrationForm.clickEmailField();
        registrationForm.clickLastNameField();
        cy.get('form').should('contain.text', 'Email required');
    });

    it('Should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" for password field', () => {
        registrationForm.fillPasswordField('1234567890');
        cy.get('form').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });
});
