class RegistrationForm {
    constructor() {
        this.nameField = '#signupName';
        this.lastNameField = '#signupLastName';
        this.emailField = '#signupEmail';
        this.passwordField = '#signupPassword';
        this.repeatPasswordField = '#signupRepeatPassword';
        this.registerButton = '.btn-primary:nth-child(1)';
    }

    fillAllFields(name, lastName, email, password, repeatPassword) {
        cy.get(this.nameField).type(name);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
        cy.get(this.repeatPasswordField).type(repeatPassword);
    }

    fillNameField(name) {
        cy.get(this.nameField).type(name);
        cy.get(this.lastNameField).click();
        cy.wait(1000);
    }

    fillLastNameField(lastName) {
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.nameField).click();
        cy.wait(1000);
    }

    fillPasswordField(password) {
        cy.get(this.passwordField).type(password);
        cy.get(this.lastNameField).click();
        cy.wait(1000);
    }

    clickRegisterButton(){
        cy.get(this.registerButton).click();
    }

    clickNameField(){
        cy.get(this.nameField).click();
    }

    clickLastNameField(){
        cy.get(this.lastNameField).click();
    }

    clickEmailField(){
        cy.get(this.emailField).click();
    }

}

export default new RegistrationForm();
