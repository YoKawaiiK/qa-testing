/// <reference types="Cypress" />

describe("assertions with should, expect", () => {
  it("Should", () => {
    cy.viewport(1024, 700);
    cy.visit("docs.cypress.io/api/table-of-contents");
    cy.get(".DocSearch-Button").click();

    cy.get("#docsearch-input")
      .type("hello")
      .should("have.value", "hello")
      .and("be.visible");
    cy.get(".DocSearch-Container").click();
  });

  it("Expect", () => {
    cy.get(".DocSearch-Button").click();
    cy.get("#docsearch-input")
      .type("hello")
      .then((input) => {
        expect(input).to.have.value("hello");
      });
  });

  it("Radiobutton expect check", () => {
    cy.visit("https://bulma.io/documentation/form/radio/");
    cy.get(".column.is-half")
      .eq(0)
      .find("div")
      .find("label")
      .find("[type='radio']")
      .eq(0)
      .check()
      .should("be.checked");

    cy.get(".column.is-half")
      .eq(0)
      .find("div")
      .find("label")
      .find("[type='radio']")
      .eq(1)
      .should("not.be.checked");
  });

  it("Check's correct attrin button", () => {
    cy.visit("https://www.javatpoint.com/html-button-tag");

    cy.get("button")
      .contains("Click Here", { matchCase: false })
      .should("have.attr", "name")
      .and("match", /button/);
  });

  it("Check's correct URL", () => {
    const url = "https://www.javatpoint.com/html-button-tag";

    cy.visit(url);

    cy.url().should("eq", url);
  });
});
