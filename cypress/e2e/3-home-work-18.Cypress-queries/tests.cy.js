/**
 * 1. У репозиторії створіть нову гілку для виконання завдання. 
 * 2. Перейдіть до застосунку https://qauto.forstudy.space/. 
 * 3. Напишіть декілька тестів та поєднайте їх у одному блоці describe, тести повинні знаходити всі кнопки зхідеру:
 * 4. При написанні тестів використовуйте вивчені підходи та Best Practices для роботи з елементами.
 * 5. Після написання запустіть тести у UI режимі та переконайтесь, що всі елементи знайдено коректно та тести проходять без помилок.
 * 6. Відправте код у репозиторій та створіть pull request.
 * 
 */


// 3. Напишіть декілька тестів та поєднайте їх у одному блоці describe, тести повинні знаходити всі кнопки з хідеру:
// Кнопки з хедеру
describe('Header Buttons Test', () => {
    beforeEach(() => {
        //  2. Перейдіть до застосунку https://qauto.forstudy.space/. 
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });

    it('Finds the Home button', () => {
        cy.get('header').contains('Home').should('be.visible');
    });

    it('Finds the About button', () => {
        cy.get('header').contains('About').should('be.visible');
    });

    it('Finds the Contact button', () => {
        cy.get('header').contains('Contact').should('be.visible');
    });
});

// Кнопки з футеру
describe('Footer Links and Buttons Test', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });

    it('Finds all links in the footer', () => {
        cy.get('footer a').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    });
});
