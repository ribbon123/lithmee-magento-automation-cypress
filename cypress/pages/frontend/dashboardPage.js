/// <reference types="cypress" />

class DashBoardPage{

    getDashboardHeading(){
       return cy.get('[data-ui-id="page-title-wrapper"]');
    }

    searchProduct(productName){
        cy.get('#search').type(productName);
        cy.get('button[title="Search"]').click();
    }

    selectProduct(productName){
        cy.contains('a', productName).click();
    }

    addToCart(){
        cy.get('#product-addtocart-button').click();
    }

    clickCartIcon(){
        cy.contains('You added').should('be.visible');
        cy.get('a.action.showcart').click();
    }

    getCartQuantity(){
        return cy.get('#qty');
    }

    clickEditItemIcon(){
        cy.get('a[title="Edit item"]').click();
    }

    editProductQuantity(quantity){
        cy.get('#qty').clear();
        cy.get('#qty').type(quantity);
    }

    clickViewAndEditCart(){
        cy.get('a.action.viewcart').click();
    }

     clickEditItemLink(){
        cy.get('a[title="Edit item parameters"]').click();
    }

    clickUpdateCart(){
        cy.get('#product-updatecart-button').click();
    }

    clickRemoveItem(){
        cy.get('a[title="Remove item"]').click();
    }

    getNoCartItemMessage(){
        return cy.contains('You have no items');
    }

    getRegisterUserSuccessMessage(){
       return cy.contains('Thank you for registering');
    }

    clickOptions(){
        cy.contains('button', 'Change').click();
    }

    clickSignOut(){
        cy.contains('a', 'Sign Out').click()
    }
   
}

export default DashBoardPage;