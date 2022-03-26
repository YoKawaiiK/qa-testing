describe("Tests docs.cypress.io", () => {
  it.only("Get by id", () => {
    cy.visit("www.facebook.com");
    cy.get("#email");
    cy.get("#pass");
    
  });

  it.only("Get by different data-atributes", () => {
    
    cy.get("button[name='login'][type='submit']");
  });
});
