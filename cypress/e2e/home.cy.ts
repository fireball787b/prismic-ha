describe("Homepage", () => {
  it("loads the homepage and sees monster search", () => {
    cy.visit("/");
    cy.get("input[placeholder='Search monsters...']").should("exist");
    // possibly type or click around
    cy.contains("Fire Dragon").should("exist");
  });
});
