/// <reference types="Cypress" />

describe("Using contains()", () => {
  it("Visit website and find the element", () => {
    cy.visit("www.cypress.io/");
    cy.contains("Sign up");
  });

  it("Get Button in banner", () => {
    // wait banner
    cy.wait(1000);
    cy.contains("accept cookies", { matchCase: false });
  });

  it("Get Login item on nav", () => {
    cy.contains("li", "Login");
  });

  it("Get element with get() and contains()", () => {
    cy.get("footer").contains("Send updates to my inbox", { matchCase: false });
  });
});
