describe('API tests', () => {
    let sid;
    let createdCarId;
    let expenseData;

    before(() => {
        const userCreds = {
            email: 'yurii_z@outlook.com',
            password: '123QWEasd',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        })
    })

    it('should validate the created car in the list', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data))
            expect(response.status).to.equal(200);

            // Validate the created car is in the list
            const carList = response.body.data;
            const createdCar = carList.find(car => car.id === 197331);
            expect(createdCar).to.exist;
        });
    });

    it('should create an expense for the created car and validate the response', () => {
        cy.request({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`
            },
            body: {
                carBrandId: 1,
                carModelId: 1,
                mileage: 123
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            createdCarId = response.body.data.id;
        });

        cy.createExpense(createdCarId, expenseData, sid).then(() => {
            cy.get('@createExpenseResponse').then((responseBody) => {
                expect(responseBody.data).to.have.property('id');
                expect(responseBody.data.initialMileage).to.equal(expenseData.initialMileage);
                expect(responseBody.data.id).to.equal(197297);
            });
        });
    });

    it('Should find created car by id', () => {
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
