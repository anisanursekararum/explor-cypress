describe('Login saucedemo', () => {
  it('failed login', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    //cy.get('[data-test="username"]')
    //cy.get('[data-test="password"]')
   // cy.get('[data-test="login-button"]').click()
  //  cy.get('[data-test="error"]').contains(('Epic sadface: Username is required')).should('be.visible')
  })
})