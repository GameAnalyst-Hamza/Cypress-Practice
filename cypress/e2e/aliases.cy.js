/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[id="userName-label"]').as("aliasNameLabel");
    cy.fixture("example.json").as("aliasFixtureFile");
  });

  it.only("Aliases", () => {
    cy.get("@aliasNameLabel").then((x) => {
      expect(x.text()).to.eq("Name");
    });

    cy.get("@aliasFixtureFile").then((data) => {
      cy.get("#firstName").type(data.username);
    });
  });
});
