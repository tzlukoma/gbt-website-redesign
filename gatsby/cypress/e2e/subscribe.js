describe('subscription', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should register a new user - mobile', () => {
    cy.viewport(411, 823);
    cy.contains('Sign Up').click();
    cy.contains('Email address is not required').should('be.visible');
    cy.get('[data-testid=email]').type('helen');
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.get('[data-testid=email]').type('.smith@example.com');
    cy.contains('Please enter a valid email address').should('not.exist');
  });
  it('should register a new user - sm', () => {
    cy.viewport(640, 700);
    cy.contains('Sign Up').click();
    cy.contains('Email address is required').should('be.visible');
    cy.get('[data-testid=email]').type('helen');
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.get('[data-testid=email]').type('.smith@example.com');
    cy.contains('Please enter a valid email address').should('not.exist');
  });
  it('should register a new user - md', () => {
    cy.viewport(768, 700);
    cy.contains('Sign Up').click();
    cy.contains('Email address is required').should('be.visible');
    cy.get('[data-testid=email]').type('helen');
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.get('[data-testid=email]').type('.smith@example.com');
    cy.contains('Please enter a valid email address').should('not.exist');
  });
});
