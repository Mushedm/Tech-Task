class LoginPage {
  login(username, password) {
    cy.get('input#user-name').clear().type(username);
    cy.get('input#password').clear().type(password);
    cy.get('input#login-button').click();
  }
}

export default new LoginPage();