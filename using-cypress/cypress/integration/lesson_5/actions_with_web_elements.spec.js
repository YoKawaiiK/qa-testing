/// <reference types="Cypress" />

// type
describe("Actions with web elements", () => {
    it("Type", () => {
      cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
      cy.get(".DocSearch.DocSearch-Button").click();
      cy.get("#docsearch-input").type("Hello");
      cy.get("#docsearch-input").wait(2000).blur();
    });

    it("Focus", () => {
      cy.get("#docsearch-input").focus();
      cy.get("#docsearch-input").wait(2000).blur();
    });

    it.only("Submit and click", () => {
      cy.visit("https://www.w3schools.com/html/html_forms.asp");

      cy.get("form").eq(0).submit();
      cy.get("input[type='submit']").eq(0).click()
    });

    it.only("Right click", () => {
      cy.visit("https://example.cypress.io/commands/actions");

      cy.contains("Right click to edit").rightclick()
    });

    it.only("Double click", () => {
      cy.visit("https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html");

      cy.get("aside").dblclick().should('have.class', "large")
    });

    it("Check", () => {
      cy.visit("www.facebook.com/");
      cy.get('[data-testid="open-registration-form-button"]').click();

      cy.get('[type="radio"]').eq(1).check();
    });

    it("Uncheck", () => {
      cy.visit("en.privatbank.ua/");
      cy.get("#switch-input")
        .check({ force: true })
        .wait(2000)
        .uncheck({ force: true });
    });

  it("Select", () => {
      cy.visit("www.facebook.com/");
      cy.get('[data-testid="open-registration-form-button"]').click();

      cy.get("[name='birthday_day']").select("2")
      cy.get("[name='birthday_month']").select('11')
      cy.get("[name='birthday_year']").select('1998')
  })

    it("Scroll into view", () => {
      cy.visit("https://www.cypress.io/");
      cy.contains("Read more about why people love Cypress", {
        matchCase: 0,
      }).scrollIntoView();
    });

    it("Scroll to", () => {
      cy.visit("https://www.cypress.io/");
      cy.scrollTo('0%', '50%');
    });

  it("Trigger: dropdown hover menu", () => {
    cy.visit('next.privat24.ua')
    cy.get("[data-qa-node='menu']").eq(1)
      .wait(2000)
      .trigger("mouseover");
  });
});
