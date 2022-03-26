export class BasePage {
  _url = null;

  constructor(url) {
    this._url = url;
  }

  openPage() {
    cy.visit(this._url);
  }

  typeAmount(amount) {
    cy.get('input[data-qa-node="amount"]').type(amount);
  }

  typeCard(cardNumber, expires, cvv, firstName, secondName) {
    cy.get("[data-qa-node='numberdebitSource']").type(cardNumber);
    cy.get("[data-qa-node='expiredebitSource']").type(expires);
    cy.get("[data-qa-node='cvvdebitSource']").type(cvv);
    cy.get('[data-qa-node="firstNamedebitSource"]').type(firstName);

    // cy.get('[data-qa-node="submit"]', { timeout: 10000 }).should(
    //   "not.have.attr",
    //   "disabled"
    // );

    cy.get('button[type="submit"]', { timeout: 10000 }).should(
      "not.have.attr",
      "disabled"
    );
    cy.get('[data-qa-node="firstNamedebitSource"]').type(firstName);
    cy.get('[data-qa-node="lastNamedebitSource"]').type(secondName);
  }

  submitPayment() {
    cy.get('[data-qa-node="submit"]').click();
  }
}

// export const basePage = new BasePage()
