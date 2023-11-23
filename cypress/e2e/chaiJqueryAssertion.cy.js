/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Chai jQuery Assertion", () => {
    cy.get('[id="userName-label"]').then(($x) => {
      expect($x.text()).to.eq("Name");
    });
  });
});
