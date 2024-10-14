describe('Create Car and Intercept Response', () => {
    it('should create a car and intercept the response', () => {
        // Intercept the request to the API
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar');

        // Perform the action to create a car (you may need to adjust the selectors and data)
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('yurii_z@outlook.com');
        cy.get('#signinPassword').type('123QWEasd');
        cy.contains('Login').click();

        cy.contains('Add car').click();
        cy.get('#addCarMileage').click();
        cy.get('#addCarMileage').type('2');
        cy.get('.modal-footer > .btn-primary').click();

        cy.wait('@createCar').then((interception) => {
            expect(interception.response.statusCode).to.equal(201);

            const createdCarId = interception.response.body.data.id;
            cy.wrap(createdCarId).as('createdCarId');
        });
    });
});
