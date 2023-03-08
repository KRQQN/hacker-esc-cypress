describe("site is running on localhost", () => {
  it("connects to loacalhost landing page", () => {
    cy.visit("http://localhost:8080");
  });

  it("On-site button leads to challenges.html", () => {
    cy.visit("http://localhost:8080");
    cy.wait(1000);
    cy.get("div.hero-cta > a.button.secondary").click();
    cy.url().should("include", "challenges.html");
  });
});
