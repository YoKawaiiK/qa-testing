describe("Tests docs.cypress.io", () => {
  it.only("Get by part word of class element", () => {
    cy.visit('next.privat24.ua')
    cy.get('*[class^="card"]').first()
  });

});
