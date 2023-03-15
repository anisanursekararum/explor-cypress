import loginPage from '../../support/pages/login-page';
const loginInput = require('../../fixtures/data.json')

describe('Login saucedemo', () => {
  const LoginPage = new loginPage()
  const uniqueSeed = Date.now().toString();
  const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
  it('failed login empty form', () => {
    cy.visit('/')
    cy.get(LoginPage.login).click()
    cy.url().should('include', '/login')
    LoginPage.clickLoginButton()
    cy.get(LoginPage.error_messages)
      .should('have.text', 'Login was unsuccessful. Please correct the errors and try again.')
    cy.get('.validation-summary-errors > ul > li')
      .should('contain.text', 'No customer')
  })
  it('failed login no found', () => {
    const uniqueId = getUniqueId();
    //const faker = require("faker");5
    cy.visit('/')
    cy.get(LoginPage.login).click()
    cy.url().should('include', '/login')
    cy.get(LoginPage.username).type('abc'+uniqueId+'@gmail.com')
    LoginPage.inputPassword(loginInput.static_pass)
    LoginPage.clickLoginButton()
    cy.get(LoginPage.error_messages)
      .should('have.text', 'Login was unsuccessful. Please correct the errors and try again.')
    cy.get('.validation-summary-errors > ul > li')
      .should('contain.text', 'No customer')
  })
  it('success login', () => {
    cy.visit('/')
    cy.get(LoginPage.login).click()
    cy.url().should('include', '/login')
    cy.get(LoginPage.username).clear().type(loginInput.static_email)
    //LoginPage.inputPassword(loginInput.static_pass) //input dengan method yang diimport
    cy.input_email('#Password', 'Pass123') //input dengan method yang ada di command
    LoginPage.clickLoginButton()
    cy.get('.header-links > ul > :nth-child(1) > .account')
      .should('have.text','moonbyul2805@gmail.com')
  })
})