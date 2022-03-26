import { replaceBetween, removeWhiteSpace } from "../utils/utils";
import { BasePage } from "./base_page";

class MobileReplenishment extends BasePage {
  // _url = "https://next.privat24.ua/mobile";

  constructor() {
    super("https://next.privat24.ua/mobile");
  }

  // openPage() {
  //   cy.visit(this._url);
  // }

  typePhoneNumber(phone) {
    cy.get('[data-qa-node="phone-number"]').type(phone);
  }

  // typeAmount(amount) {
  //   cy.get('input[data-qa-node="amount"]').type(amount);
  // }

  // typeCard(cardNumber, expires, cvv, firstName, secondName) {
  //   cy.get("[data-qa-node='numberdebitSource']").type(cardNumber);
  //   cy.get("[data-qa-node='expiredebitSource']").type(expires);
  //   cy.get("[data-qa-node='cvvdebitSource']").type(cvv);
  //   cy.get('[data-qa-node="firstNamedebitSource"]').type(firstName);

  //   cy.get('[data-qa-node="submit"]', { timeout: 10000 }).should(
  //     "not.have.attr",
  //     "disabled"
  //   );
  //   cy.get('[data-qa-node="firstNamedebitSource"]').type(firstName);
  //   cy.get('[data-qa-node="lastNamedebitSource"]').type(secondName);
  // }

  // submitPayment() {
  //   cy.get('[data-qa-node="submit"]').click();
  // }

  checkCardPayment(cardNumbers, obscure = "*") {
    const replacedCardNumbers = replaceBetween(cardNumbers, 4, 12, obscure);

    // cy.get('[data-qa-node="card"]').should("have.text", replacedCardNumbers);
    cy.get('[data-qa-node="card"]')
      .invoke("text")
      .then((text) => {
        expect(removeWhiteSpace(text)).to.equal(replacedCardNumbers);
      });
  }

  checkCardAmount(amount = "100") {
    cy.get('div[data-qa-node="amount"]').should("contain.text", amount);
  }

  checkCardCommission(commission = "2") {
    cy.get('span[data-qa-node="commission"]').should(
      "contain.text",
      commission
    );
  }

  checkPaymentCurrency(currency) {
    cy.get('div[data-qa-node="amount"]').should("contain.text", currency);
    cy.get('[data-qa-node="commission-currency"]').should(
      "contain.text",
      currency
    );
  }
}

export const mobileReplenishment = new MobileReplenishment();
