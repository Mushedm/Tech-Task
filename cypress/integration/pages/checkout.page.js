class CheckoutPage {
  get checkoutTitle() {
    return cy.get('span.title')
  }

  personalDetails(firstName, lastName, postCode) {
      cy.get('input#first-name').clear().type(firstName);
      cy.get('input#last-name').clear().type(lastName);
      cy.get('input#postal-code').clear().type(postCode);
    }

  get continueButton() {
      return cy.get('input#continue');
    }

  get finishButton() {
    return cy.get('button#finish');
  }

  get completeHeader() {
    return cy.get('h2.complete-header');
  }

  get completeText() {
    return cy.get('div.complete-text');
  }
}

export default new CheckoutPage();
