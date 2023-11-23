/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Invoke a Function", () => {
    cy.get('[id="userName-label"]')
      .invoke("text")
      .then((x) => {
        expect(x).to.eq("Name");
      });

    cy.get('[id="userName-label"]')
      .invoke("attr", "class")
      .then((x) => {
        expect(x).to.eq("form-label");
      });
  });
});
