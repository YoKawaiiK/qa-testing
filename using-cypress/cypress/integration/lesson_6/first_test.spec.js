/// <reference types="Cypress" />

import * as constants from "./constants";
import { removeWhiteSpace } from "../../support/utils/utils";

describe("Replenishment money", () => {
  it("Case #1 - mobile phone", () => {
    const amount = "100";

    cy.visit("https://next.privat24.ua/mobile");
    cy.get('[data-qa-node="phone-number"]').type(constants.PHONE);

    cy.get('input[data-qa-node="amount"]').type(amount);

    cy.get("[data-qa-node='numberdebitSource']").type(constants.CARD_NUMBER);

    cy.get("[data-qa-node='expiredebitSource']").type(constants.EXPIRES);

    cy.get("[data-qa-node='cvvdebitSource']").type(constants.CVV);

    cy.get('[data-qa-node="submit"]', { timeout: 10000 }).should(
      "not.have.attr",
      "disabled"
    );

    cy.get('[data-qa-node="firstNamedebitSource"]').type(constants.FIRST_NAME);

    cy.get('[data-qa-node="lastNamedebitSource"]').type(constants.SECOND_NAME);

    cy.get('[data-qa-node="submit"]').click();

    cy.get('div[data-qa-node="amount"]').should("contain.text", amount);

    cy.get('span[data-qa-node="commission"]').should("contain.text", "2");
  });

  it("Case #2 - debit card transfer", () => {
    const amount = "400"; //300 - 93.28 UAH
    const comment = `Send to you ${amount}`;

    cy.visit("https://next.privat24.ua/money-transfer/card");

    cy.get("[data-qa-node='numberdebitSource']")
    .type(constants.CARD_NUMBER);
    cy.get("[data-qa-node='expiredebitSource']").type(constants.EXPIRES);
    cy.get("[data-qa-node='cvvdebitSource']").type(constants.CVV);
    cy.get('[data-qa-node="firstNamedebitSource"]').type(constants.FIRST_NAME);
    cy.get('[data-qa-node="lastNamedebitSource"]').type(constants.SECOND_NAME);

    cy.get('[data-qa-node="numberreceiver"]').type(
      constants.RECIEVER_CARD_NUMBER
    );

    cy.get('[data-qa-node="firstNamereceiver"]').type(
      constants.RECIEVER_FIRST_NAME
    );
    cy.get('[data-qa-node="lastNamereceiver"]').type(
      constants.RECIEVER_SECOND_NAME
    );
    cy.get('[data-qa-node="amount"]').type(amount);

    cy.get('[data-qa-node="toggle-comment"]').click();
    cy.get('[data-qa-node="comment"]').type(comment);
    cy.get('[type="submit"]').wait(1000).click();

    // updated page
    cy.wait(1000);

    cy.get('[data-qa-node="payer-card"]')
      .invoke("text")
      .then((text) => {
        expect(removeWhiteSpace(text)).to.equal(constants.CARD_NUMBER);
      });
    cy.get('[data-qa-node="payer-amount"]').should("contain.text", amount);

    cy.get('[data-qa-node="receiver-card"]')
      .invoke("text")
      .then((text) => {
        expect(removeWhiteSpace(text)).to.equal(constants.RECIEVER_CARD_NUMBER);
      });
    cy.get('[data-qa-node="receiver-amount"]').should("contain.text", amount);
    cy.get('[data-qa-node="submit"]').click();
  });
});
