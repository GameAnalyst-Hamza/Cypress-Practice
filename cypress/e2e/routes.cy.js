/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Network Routes", () => {
    cy.intercept("GET", "/entries").as("waitForEnteries");
    cy.intercept("POST", "/bycat").as("waitForLaptopsCall");

    cy.wait("@waitForEnteries");

    cy.get(".list-group").find("a").contains("Laptops").click();

    cy.wait("@waitForLaptopsCall");
  });
});
