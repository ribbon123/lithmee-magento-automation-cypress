### Lithmee Ranasinghe - Magento Cypress Automation

This project contains automated UI tests for the Magento website using Cypress. The framework follows the Page Object Model (POM) design pattern to maintain a clean, scalable, and maintainable test structure. It is developed using JavaScript.

#### Project Structure

```
├── pages/
│   ├── admin/           # Page Object Model classes for Admin
│   └── frontend/        # Page Object Model classes for Frontend pages
│
├── tests/               # Test scripts
│
├── cypress/
│   └── fixtures/        # Test data files
│       ├── admintestdata.json
│       └── frontendtestdata.json
│
├── cypress.config.js    # Cypress configuration
└── README.md
```

Folder Details

**pages/**
Contains Page Object Model classes with locators and page methods.

* **admin/** – Page classes for Magento Admin features such as login and grid loading.
* **frontend/** – Page classes for store functionalities such as register, signin, signout, search product, add product, update product and remove product.

**tests/**
Contains all automated test scripts.

Test files use the page classes from the `pages/` folder to perform actions and validations.

**cypress/fixtures/**
Contains external JSON files with test data used by the tests.

Files included:

* `admintestdata.json` – Test data for admin-related tests
* `frontendtestdata.json` – Test data for frontend store tests
