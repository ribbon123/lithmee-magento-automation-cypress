import AdminLoginPage from "../pages/admin/AdminLoginPage.js";
import AdminDashboard from "../pages/admin/adminDashboard.js";
import admintestdata from "../fixtures/admintestdata.json";

describe('Admin Grid Testing', () => {

    let adminLoginPage = new AdminLoginPage(); 
    let adminDashboard = new AdminDashboard();

    beforeEach('Admin Login', () => {
      cy.visit(admintestdata.baseUrl);
      adminLoginPage.signIn(admintestdata.userName,admintestdata.password);
    })

    it('Grid Loading', () => {
       adminDashboard.clickSales();
       adminDashboard.clickOrders();
       adminDashboard.getGridTable().should('be.visible');
    })

})