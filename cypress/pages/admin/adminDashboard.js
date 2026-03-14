class AdminDashboard{

    clickSales(){
         cy.get('#menu-magento-sales-sales').click();
    }

    clickOrders(){
        cy.contains('Orders').click({force: true});
    }

    getGridTable(){
        return cy.get('.data-grid.data-grid-draggable');
    }
}

export default AdminDashboard;