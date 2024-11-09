
describe('Name Field Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should show "Name is required" for empty field', () => {
    cy.get('input[name="name"]').focus().blur();
    cy.get('.error-message').should('contain', 'Name is required');
    cy.get('input[name="name"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Name is invalid" for wrong data', () => {
    cy.get('input[name="name"]').type('1234');
    cy.get('.error-message').should('contain', 'Name is invalid');
    cy.get('input[name="name"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Name has to be from 2 to 20 characters long" for wrong length', () => {
    cy.get('input[name="name"]').type('A');
    cy.get('.error-message').should('contain', 'Name has to be from 2 to 20 characters long');
    cy.get('input[name="name"]').should('have.css', 'border-color', 'red');

    cy.get('input[name="name"]').clear().type('A'.repeat(21));
    cy.get('.error-message').should('contain', 'Name has to be from 2 to 20 characters long');
    cy.get('input[name="name"]').should('have.css', 'border-color', 'red');
  });

  it('should trim spaces and validate length correctly', () => {
    cy.get('input[name="name"]').type(' A ');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="name"]').should('have.value', 'A');
  });

  it('should accept valid name', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="name"]').should('not.have.css', 'border-color', 'red');
  });
});

describe('Last Name Field Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should show "Last name is required" for empty field', () => {
    cy.get('input[name="lastName"]').focus().blur();
    cy.get('.error-message').should('contain', 'Last name is required');
    cy.get('input[name="lastName"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Last name is invalid" for wrong data', () => {
    cy.get('input[name="lastName"]').type('1234');
    cy.get('.error-message').should('contain', 'Last name is invalid');
    cy.get('input[name="lastName"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Last name has to be from 2 to 20 characters long" for wrong length', () => {
    cy.get('input[name="lastName"]').type('A');
    cy.get('.error-message').should('contain', 'Last name has to be from 2 to 20 characters long');
    cy.get('input[name="lastName"]').should('have.css', 'border-color', 'red');

    cy.get('input[name="lastName"]').clear().type('A'.repeat(21));
    cy.get('.error-message').should('contain', 'Last name has to be from 2 to 20 characters long');
    cy.get('input[name="lastName"]').should('have.css', 'border-color', 'red');
  });

  it('should trim spaces and validate length correctly', () => {
    cy.get('input[name="lastName"]').type(' A ');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="lastName"]').should('have.value', 'A');
  });

  it('should accept valid last name', () => {
    cy.get('input[name="lastName"]').type('Smith');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="lastName"]').should('not.have.css', 'border-color', 'red');
  });
});

describe('Email Field Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should show "Email required" for empty field', () => {
    cy.get('input[name="email"]').focus().blur();
    cy.get('.error-message').should('contain', 'Email required');
    cy.get('input[name="email"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Email is incorrect" for wrong data', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('.error-message').should('contain', 'Email is incorrect');
    cy.get('input[name="email"]').should('have.css', 'border-color', 'red');
  });

  it('should accept valid email', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="email"]').should('not.have.css', 'border-color', 'red');
  });
});

describe('Password Field Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should show "Password required" for empty field', () => {
    cy.get('input[name="password"]').focus().blur();
    cy.get('.error-message').should('contain', 'Password required');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" for wrong data', () => {
    cy.get('input[name="password"]').type('short');
    cy.get('.error-message').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'red');

    cy.get('input[name="password"]').clear().type('alllowercase');
    cy.get('.error-message').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'red');

    cy.get('input[name="password"]').clear().type('ALLUPPERCASE');
    cy.get('.error-message').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'red');

    cy.get('input[name="password"]').clear().type('NoNumbers');
    cy.get('.error-message').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('input[name="password"]').should('have.css', 'border-color', 'red');
  });

  it('should accept valid password', () => {
    cy.get('input[name="password"]').type('Valid1Password');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="password"]').should('not.have.css', 'border-color', 'red');
  });
});

describe('Re-enter Password Field Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should show "Re-enter password required" for empty field', () => {
    cy.get('input[name="reEnterPassword"]').focus().blur();
    cy.get('.error-message').should('contain', 'Re-enter password required');
    cy.get('input[name="reEnterPassword"]').should('have.css', 'border-color', 'red');
  });

  it('should show "Passwords do not match" when passwords do not match', () => {
    cy.get('input[name="reEnterPassword"]').type('DifferentPassword');
    cy.get('.error-message').should('contain', 'Passwords do not match');
    cy.get('input[name="reEnterPassword"]').should('have.css', 'border-color', 'red');
  });

  it('should accept matching passwords', () => {
    cy.get('input[name="reEnterPassword"]').type('Valid1Password');
    cy.get('.error-message').should('not.exist');
    cy.get('input[name="reEnterPassword"]').should('not.have.css', 'border-color', 'red');
  });
});

describe('Registration Tests', () => {
  const uniqueEmail = `test+${Date.now()}@example.com`;

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary').click();
  });

  it('should display the registration form', () => {
    cy.get('form').should('be.visible');
  });

  it('should register a new user successfully', () => {
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="repeatPassword"]').type('Password123!');
    cy.get('.btn-primary:nth-child(1)').click();

    cy.url().should('include', 'https://qauto.forstudy.space/panel/garage');
    cy.contains('You don’t have any cars in your garage').should('be.visible');
  });

  it('should show error for existing email', () => {
    cy.get('input[name="name"]').type('Jane');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('existing@example.com'); // Використовуй email, який вже існує
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirmPassword"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.contains('Email already exists').should('be.visible');
  });
});


describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });

    cy.get('.btn-primary:nth-child(1)').click();
    cy.login(email, password);
  });

  it('should mask password in logs', () => {
    cy.get('input[name="password"]').type('superSecret123', { sensitive: true });
  });
});

