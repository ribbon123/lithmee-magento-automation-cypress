import HomePage from '../pages/frontend/homePage';
import RegisterPage from '../pages/frontend/registerPage';
import DashBoardPage from '../pages/frontend/dashboardPage';
import frontendtestdata from '../fixtures/frontendtestdata.json';

describe('Product and Cart Testing', () => {

    let homePage = new HomePage();
    let registerPage = new RegisterPage();
    let dashBoardPage =new DashBoardPage();
    
    const firstName = frontendtestdata.firstName;
    const lastName = frontendtestdata.lastName;

    const randomNumber = Math.floor(Math.random()*1000);
    const email = `${firstName.toLowerCase()}${randomNumber}@gmail.com`;

    const password = `${firstName.toLowerCase()}${lastName.toLowerCase()}@${randomNumber}`;
    const confirmPassword = password;

    beforeEach('Register User', () => {
      cy.visit(frontendtestdata.baseUrl);
      homePage.clickCreateAccount();

      registerPage.registerUser(firstName, lastName, email, password, confirmPassword);
    })

    it('Product and Cart', () => {
      
      //Search Product and Open Details
      dashBoardPage.searchProduct(frontendtestdata.searchCategory);
      dashBoardPage.selectProduct(frontendtestdata.searchItem);

      //Add to Cart and Validate
      dashBoardPage.addToCart();
      dashBoardPage.clickCartIcon();
      dashBoardPage.getCartQuantity().should('have.value', '1');

      //Update Quantity
      dashBoardPage.clickViewAndEditCart();
      dashBoardPage.clickEditItemLink();
      dashBoardPage.editProductQuantity("2");
      dashBoardPage.getCartQuantity().should('have.value', '2');
      dashBoardPage.clickUpdateCart();

      //Remove Item
      dashBoardPage.clickRemoveItem();
      
    })

})