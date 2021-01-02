describe("on registration success", () => {
  it("registers a new user", () => {
    cy.visit("/register");
    cy.get(`[data-cy="registration-email-address"]`).type("user@host");
    cy.get(`[data-cy="registration-password"]`).type("password");
    cy.get(`[data-cy="registration-submit"]`).click();
    cy.url().should("eq", Cypress.config().baseUrl + "/confirmation");
  });
});

describe("on registration failure", () => {
  // We may want to show custom error messages in the future. For now, the errors shown are only the built-in browser validation messages.

  it("user enters no data", () => {
    cy.visit("/register");
    cy.get(`[data-cy="registration-submit"]`).click();
    cy.url().should("eq", Cypress.config().baseUrl + "/register");
  });

  it("user enters invalid email address", () => {
    cy.visit("/register");
    cy.get(`[data-cy="registration-email-address"]`).type("@");
    cy.get(`[data-cy="registration-password"]`).type("password");
    cy.get(`[data-cy="registration-submit"]`).click();
    cy.url().should("eq", Cypress.config().baseUrl + "/register");
  });

  it("user enters invalid password", () => {
    cy.visit("/register");
    cy.get(`[data-cy="registration-email-address"]`).type("user@host");
    cy.get(`[data-cy="registration-password"]`).type("        ");
    cy.get(`[data-cy="registration-submit"]`).click();
    cy.url().should("eq", Cypress.config().baseUrl + "/register");
  });
});
