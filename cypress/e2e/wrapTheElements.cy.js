/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Wrap the Elements", () => {
    cy.get('[id="userName-label"]').then((x) => {
      cy.wrap(x).should("contain", "Name");
    });
  });
});
