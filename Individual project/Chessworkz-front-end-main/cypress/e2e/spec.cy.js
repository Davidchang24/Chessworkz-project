describe("Render home page", () => {
  it("Renders home page correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".navbar-brand").should("be.visible");
    cy.get('[href="/courses"]').should("be.visible");
    cy.get('[href="/tools"]').should("be.visible");
  });
});

describe("Navigation bar links", () => {
  it("Nav bar works correcty", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".navbar-brand").click();
    cy.get('[href="/courses"]').click();
    cy.get('[href="/tools"]').click();
    cy.get("cg-board").click();
  });
});
