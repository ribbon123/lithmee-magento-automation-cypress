/// <reference types="cypress" />

class DashBoardPage{

    getDashboardHeading(){
       return cy.get('[data-ui-id="page-title-wrapper"]');
    }

    searchProduct(productName){
        cy.get('#search').type(productName);
        cy.get('#search').type('{enter}');
    }

    selectProduct(productName){
        cy.contains('a', productName).click();
    }

    addToCart(){
        cy.get('#product-addtocart-button').should('be.visible').click();
    }

    clickCartIcon(){
        cy.contains('You added').should('be.visible');
        cy.get('a.action.showcart').click();
    }

    getCartQuantity(){
        return cy.get('#qty');
    }

    editProductQuantity(quantity){
       cy.get('#qty').invoke('val', quantity).trigger('change');
    }

    clickViewAndEditCart(){
        cy.contains('a', 'View and Edit Cart').click();
    }

     clickEditItem(){
        cy.get('a[title="Edit item parameters"]').click();
    }

    clickUpdateCart(){
        cy.get('#product-updatecart-button').click();
    }

    clickRemoveItem(){
        cy.contains('a','Remove item').click();
    }

    getRegisterUserSuccessMessage(){
       return cy.contains('Thank you for registering');
    }

    clickOptions(){
        cy.contains('button','Change').click();
    }

    clickSignOut(){
        cy.contains('a','Sign Out').click();
    }
}

export default DashBoardPage;