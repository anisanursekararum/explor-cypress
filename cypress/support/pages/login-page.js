const loginInput = require('../../fixtures/data.json')

class loginPage {
    username = '#Email'
    password = '#Password'
    button_login = 'form > .buttons > .button-1'
    error_messages = '.validation-summary-errors > span'
    login = '.ico-login'

    clickLoginButton() {
        cy.get(this.button_login).click()
    }

    inputPassword() {
        //cy.get(this.password).type(password) 
        cy.input_email('#Password', 'Pass123')//input by commands
    }

}

export default loginPage;