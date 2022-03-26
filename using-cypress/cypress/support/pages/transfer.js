import { removeWhiteSpace } from "../utils/utils";
import { BasePage } from "./base_page";

class Transfer extends BasePage {

  constructor() {
    super("https://next.privat24.ua/money-transfer/card");
  }
  // openPage() {
  //   cy.visit(this._url);
  // }

  // typeAmount(amount) {
  //   cy.get('input[data-qa-node="amount"]').type(amount);
  // }

  // typeSenderCard(cardNumber, expires, cvv, firstName, secondName, amount) {
  //   cy.get("[data-qa-node='numberdebitSource']").type(cardNumber);
  //   cy.get("[data-qa-node='expiredebitSource']").type(expires);
  //   cy.get("[data-qa-node='cvvdebitSource']").type(cvv);
  //   cy.get('[data-qa-node="firstNamedebitSource"]').type(firstName);
  //   cy.get('[data-qa-node="lastNamedebitSource"]').type(secondName);
  //   cy.get('[data-qa-node="amount"]').type(amount);
  // }

  typeReceiverCard(cardNumber, firstName, secondName) {
    cy.get('[data-qa-node="numberreceiver"]').type(cardNumber);
    cy.get('[data-qa-node="firstNamereceiver"]').type(firstName);
    cy.get('[data-qa-node="lastNamereceiver"]').type(secondName);
  }

  addComment(comment) {
    cy.get('[data-qa-node="toggle-comment"]').click();
    cy.get('[data-qa-node="comment"]').type(comment);
  }

  submitPayment() {
    cy.get('[type="submit"]').wait(1000).click();
    cy.wait(1000);
  }

  checkSenderPaymentInForm(senderCardNumber, amount) {
    cy.get('[data-qa-node="payer-card"]')
      .invoke("text")
      .then((text) => {
        expect(removeWhiteSpace(text)).to.equal(senderCardNumber);
      });
    cy.get('[data-qa-node="payer-amount"]').should("contain.text", amount);
  }

  checkReceiverPaymentInForm(receiverCardNumber, amount) {
    cy.get('[data-qa-node="receiver-card"]')
      .invoke("text")
      .then((text) => {
        expect(removeWhiteSpace(text)).to.equal(receiverCardNumber);
      });
    cy.get('[data-qa-node="receiver-amount"]').should("contain.text", amount);
  }

  checkComment(comment) {
    cy.get('[data-qa-node="comment"]').should("contain.text", comment);
  }

  submitPaymentToCart() {
    cy.get('[data-qa-node="submit"]').click();
  }
}

export const transfer = new Transfer();
