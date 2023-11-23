/// <reference types="cypress"/>

import { navigateTo } from "../support/demoSitePage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Page Object Modal", () => {
  it.only("Test with Page Obejct", () => {
    cy.visit("https://demoblaze.com/");
    cy.intercept("GET", "/entries").as("waitForEnteries");
    cy.intercept("POST", "/bycat").as("waitForLaptopCall");
    cy.wait("@waitForEnteries");

    navigateTo.laptopPage();
    cy.wait("@waitForLaptopCall");

    navigateTo.monitorPage();
    cy.wait("@waitForLaptopCall");

    navigateTo.phonesPage();
    cy.wait("@waitForLaptopCall");

    navigateTo.laptopPage();
  });
});
