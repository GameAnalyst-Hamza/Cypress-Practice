/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Retries", () => {
  context("Mobile Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[id="userName-label"]').as("aliasNameLabel");
      cy.fixture("example.json").as("aliasFixtureFile");
    });

    it.only(
      "Mobile View Test",
      { retries: { runMode: 0, openMode: 4 } },
      () => {
        cy.viewport("iphone-6");
        cy.get(".navbar").find("button").click();
        cy.get(".left-pannel").should("not.exist");
      }
    );
  });
});
