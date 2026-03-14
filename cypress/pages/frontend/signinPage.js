/// <reference types="cypress" />

class SignInPage{

    fillEmail(email){
         cy.get('#email').type(email);
    }

    fillPassword(password){
        cy.get('#pass').type(password);
    }

    clickSignIn(){
        cy.get('#send2').click();
    }

    signIn(email,password){
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickSignIn();
    }
}

export default SignInPage;