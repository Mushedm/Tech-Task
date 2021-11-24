class CartPage {
  get cartTitle() {
    return cy.get('span.title')
  }
  get checkoutButton() {
    return cy.get('button#checkout');
  }
}

export default new CartPage();
