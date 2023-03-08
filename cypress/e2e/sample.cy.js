describe("site is running on localhost", () => {

    it("connects to loacalhost landing page", () => {
        cy.visit("http://localhost:8080");
    });

    it("On-site button have css & leads to challenges.html", () => {
        cy.visit("http://localhost:8080");
        cy.get(".hero-cta > .button secondary").should("have.css");
        cy.get(".hero-cta > .button secondary").click();
        cy.url().contains("challenges.html");
    });
})