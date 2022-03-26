/// <reference types="Cypress" />

import { mobileReplenishment } from "../../support/pages/mobile_replenishment";
// import { BasePage } from "../../support/pages/base_page";
import { transfer } from "../../support/pages/transfer";
import * as constants from "./constants";

describe("Tests UI with PageObject pattern", () => {
  it("Test case #1: test mobile replenishment", () => {
    // const basePage = new BasePage();

    mobileReplenishment.openPage();

    mobileReplenishment.typePhoneNumber(constants.PHONE);
    mobileReplenishment.typeAmount("100");

    mobileReplenishment.typeCard(
      constants.CARD_NUMBER,
      constants.EXPIRES,
      constants.CVV,
      constants.FIRST_NAME,
      constants.SECOND_NAME
    );

    mobileReplenishment.submitPayment();

    mobileReplenishment.checkCardPayment(constants.CARD_NUMBER, "*");
    mobileReplenishment.checkCardCommission("2");
    mobileReplenishment.checkPaymentCurrency("UAH");
  });

  it("Test case #2: test replenishment card to card", () => {
    const amount = "400"; //300 - 93.28 UAH
    const comment = `Send to you ${amount}`;

    transfer.openPage();

    transfer.typeAmount(amount);

    transfer.typeCard(
      constants.CARD_NUMBER,
      constants.EXPIRES,
      constants.CVV,
      constants.FIRST_NAME,
      constants.SECOND_NAME
    );

    transfer.typeReceiverCard(
      constants.RECIEVER_CARD_NUMBER,
      constants.RECIEVER_FIRST_NAME,
      constants.RECIEVER_SECOND_NAME
    );

    transfer.addComment(comment);
    transfer.submitPayment();

    transfer.checkSenderPaymentInForm(constants.CARD_NUMBER, amount);
    transfer.checkComment(comment);

    transfer.checkReceiverPaymentInForm(constants.RECIEVER_CARD_NUMBER, amount);

    transfer.submitPaymentToCart();
  });
});
