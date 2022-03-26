/// <reference types="Cypress" />

describe("Testing with find and eq", () => {
  it("Search elements in table", () => {
    cy.viewport(1024, 700);
    cy.visit("developer.mozilla.org/ru/docs/Learn/HTML/Tables/Basics");
    cy.get(".table-scroll")
      .contains("Personal pronouns")
      .parents(".table-scroll")
      .find("table")
      .find("tbody")
      .find("tr")
      .eq(1)
      .find("td")
      .eq(0);

    cy.get("aside[class='document-toc-container']")
      .find("section")
      .find("ul")
      .find("li")
      .eq(1).click();
  });
});
