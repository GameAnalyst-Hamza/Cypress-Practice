/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("View Port", () => {
  context("Mobile Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[id="userName-label"]').as("aliasNameLabel");
      cy.fixture("example.json").as("aliasFixtureFile");
    });

    it.only("Mobile View Test", () => {
      cy.viewport("iphone-6");
      cy.get(".navbar").find("button").click();
      cy.get(".left-pannel").should("not.exist");
    });
  });

  beforeEach(() => {
    cy.visit("/");
    cy.get('[id="userName-label"]').as("aliasNameLabel");
    cy.fixture("example.json").as("aliasFixtureFile");
  });

  it("Web View Test", () => {
    // cy.viewport("iphone-6");
    // cy.viewport("iphone-6", "landscape");

    //Custom Dimension
    // cy.viewport(375, 667);

    cy.get(".navbar").find("button").click();
    // cy.get('[class="navbar"]').find("button").click();

    cy.get(".left-pannel").should("not.exist");
  });
});
