/// <reference types="cypress" />

class RegisterPage{

    fillFistName(firstName){
        cy.get('#firstname').type(firstName);
    }

    fillLastName(lastName){
        cy.get('#lastname').type(lastName);
    }

    fillEmail(email){
        cy.get('#email_address').type(email);
    }

    fillPassword(password){
        cy.get('#password').type(password);
    }

    fillConfirmPassword(confirmPassword){
        cy.get('#password-confirmation').type(confirmPassword);
    }

    clickCreateAccount(){
        cy.get('button[title="Create an Account"]').click();
    }

    registerUser(firstName, lastName, email, password, confirmPassword){
        this.fillFistName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillPassword(password);
        this.fillConfirmPassword(confirmPassword);
        this.clickCreateAccount();
    }

    getDashBoardOpenSuccessMessage() {
        return cy.contains('Thank you for registering with Main Website Store.');
    }

    clickOption(){
        cy.get('.action.switch').contains('Change').click();
    }

    clickSignOut(){
         cy.contains('a', 'Sign Out').should('be.visible').click();
    }
}

export default RegisterPage;