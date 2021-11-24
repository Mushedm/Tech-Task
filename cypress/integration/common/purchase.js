import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import CartPage from '../pages/cart.page';
import CheckoutPage from '../pages/checkout.page';

Given('User navigates to the saucedemo page', () => {
  cy.visit('https://www.saucedemo.com/');
});

And('User signs in using the standard account', () => {
  cy.fixture('account').then(account => {
    LoginPage.login(account.username, account.password);
  });
});

Then('User is redirected to the products page and views the list of items', () => {
  cy.wait(500);
  ProductPage.addToCartButtons.first().should('be.visible');
});

When('User sorts the listed items from high to low', () => {
  cy.wait(500);
  ProductPage.selectSortItem.select('Price (high to low)');
});

And('User adds to basket the low priced & high priced items to basket', () => {
  cy.wait(500);
  ProductPage.addToCartButtons.first().click();
  cy.wait(500);
  ProductPage.addToCartButtons.last().click();
});

And('User selects the basket icon', () => {
  cy.wait(500);
  ProductPage.cartButton.scrollIntoView().should('be.visible')
  ProductPage.cartButton.click();
});

Then('User is redirected to the cart page and clicks checkout', () => {
  cy.wait(500);
  CartPage.cartTitle.should('contain', 'Your Cart');
  CartPage.checkoutButton.click();
});

And('user enter personal details and clicks finish to complete the purchase', () => {
  cy.wait(500);
  CheckoutPage.checkoutTitle.should('contain', 'Checkout: Your Information');
  CheckoutPage.personalDetails('Mushed', 'Miah', 'E5 9NF')
  CheckoutPage.continueButton.click();
  CheckoutPage.checkoutTitle.should('contain', 'Checkout: Overview');
  CheckoutPage.finishButton.click();
});

And('User sees the successful purchase message', () => {
  cy.wait(500);
  CheckoutPage.checkoutTitle.should('contain', 'Checkout: Complete!');
  CheckoutPage.completeHeader.should('contain', 'THANK YOU FOR YOUR ORDER')
  CheckoutPage.completeText.should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
});


