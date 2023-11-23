/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("API Testing", () => {
  //GET API Request
  it.skip("Get the Data", () => {
    cy.request("https://jsonplaceholder.typicode.com/todos/1").as(
      "getResource"
    );

    cy.get("@getResource").then((response) => {
      cy.log(response);
    });
  });

  it.skip("Get all the Data", () => {
    cy.request("https://jsonplaceholder.typicode.com/todos").as(
      "getAllResource"
    );

    cy.get("@getAllResource").then((response) => {
      cy.log(response);
    });
  });

  //Create Data Request
  it.skip("Create Data using API", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "Cypress API Test",
      body: "This is the Body",
      userId: 1,
    }).as("createResource");

    cy.get("@createResource").then((response) => {
      //   cy.log(response);
      expect(response.body.title).to.eq("Cypress API Test");
      expect(response.body.body).to.eq("This is the Body");
      expect(response.body.userId).to.eq(1);
      expect(response.status).to.eq(201);
      expect(response.statusText).to.eq("Created");
    });
  });

  //Updating Data Request -> PUT
  it.skip("Update Data using API", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").as(
      "getTheResource"
    );

    cy.get("@getTheResource").then((response) => {
      cy.log(response);
    });

    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 69,
    }).as("updateResource");

    cy.get("@updateResource").then((response) => {
      cy.log(response);
    });
  });

  //Updating Data Request -> PATCH
  it.skip("Update specific Data using API", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").as(
      "getTheResource"
    );

    cy.get("@getTheResource").then((response) => {
      cy.log(response);
    });

    cy.request("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
      title: "Attack on Titan",
    }).as("updateSpecificResource");

    cy.get("@updateSpecificResource").then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq("OK");
      expect(response.body.title).to.eq("Attack on Titan");
    });
  });

  //Deleting data using API
  it.skip("Delete Data using API", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").as(
      "getTheResource"
    );

    cy.get("@getTheResource").then((response) => {
      cy.log(response);
    });

    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1", {}).as(
      "deleteTheResource"
    );

    cy.get("@deleteTheResource").then((response) => {
      cy.log(response);
    });
  });
});
