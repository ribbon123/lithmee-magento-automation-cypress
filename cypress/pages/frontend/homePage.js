/// <reference types="cypress" />

class HomePage{

    clickCreateAccount(){
        cy.contains('Create an Account').click();
    }

    clickSignIn(){
        cy.contains('Sign In').click();
    }
}

export default HomePage;