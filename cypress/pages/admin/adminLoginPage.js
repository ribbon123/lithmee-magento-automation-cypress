class AdminLoginPage{

    fillEmail(email){
        cy.get('#username').type(email);
    }

    fillPassword(password){
        cy.get('#login').type(password);
    }

    clickSignIn(){
        cy.get('.action-login.action-primary').click();
    }

    signIn(email, password){
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickSignIn();
    }
}

export default AdminLoginPage;