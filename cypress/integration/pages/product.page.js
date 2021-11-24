class ProductPage {
  get addToCartButtons() {
    return cy.get('button[data-test*="add-to-cart"]');
  }

  get selectSortItem() {
    return cy.get('select[data-test="product_sort_container"]');
  }

  get cartButton() {
    return cy.get('a.shopping_cart_link');
  }
}

export default new ProductPage();
