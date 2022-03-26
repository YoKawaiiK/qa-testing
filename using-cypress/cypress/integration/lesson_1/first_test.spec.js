describe("Tests ui facebook",  () => {
  it("Get by part word of class name", () => {
    cy.visit("www.cypress.io/");

    cy.get("*[class^='styled__HeaderContent']");
  });
});
