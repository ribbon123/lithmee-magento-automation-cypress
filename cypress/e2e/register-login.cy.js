import HomePage from '../pages/frontend/homePage';
import RegisterPage from '../pages/frontend/registerPage';
import DashboardPage from '../pages/frontend/dashboardPage';
import SignInPage from '../pages/frontend/signinPage';
import frontendtestdata from '../fixtures/frontendtestdata.json';

describe('Register User and Login Testing', () => {

    let homePage = new HomePage();
    let registerPage = new RegisterPage();
    let dashboardPage = new DashboardPage();
    let signinPage = new SignInPage();
    
    const firstName = frontendtestdata.firstName;
    const lastName = frontendtestdata.lastName;

    const randomNumber = Math.floor(Math.random()*1000);
    const email = `${firstName.toLowerCase()}${randomNumber}@gmail.com`;

    const password = `${firstName.toLowerCase()}${lastName.toLowerCase()}@${randomNumber}`;
    const confirmPassword = password;

    beforeEach(() => {
       cy.visit(frontendtestdata.baseUrl);
    })

    it('Register User and Login', () => {
      homePage.clickCreateAccount();

      //Register user and validate
      registerPage.registerUser(firstName, lastName, email, password, confirmPassword);
      dashboardPage.getRegisterUserSuccessMessage().should('be.visible');

      //SignOut and SignIn
      dashboardPage.clickOptions();
      dashboardPage.clickSignOut();
      homePage.clickSignIn();

      //Validate dashboard
      signinPage.signIn(email, password);
      dashboardPage.getDashboardHeading().contains('My Account');
    })

})