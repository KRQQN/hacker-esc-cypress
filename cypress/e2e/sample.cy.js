describe("site is running on localhost", () => {

    it("connects to loacalhost landing page", () => {
        cy.visit("http://localhost:8080");
    });

    it("On-site button have css & leads to challenges.html", () => {
        cy.visit("http://localhost:8080")
        cy.wait(2000)
        cy.get(".hero-cta > .button secondary").should("have.css")
        cy.get(".hero-cta > .button secondary").click().url().contains("challenges.html")
    });
})