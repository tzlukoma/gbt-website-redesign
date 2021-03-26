describe('home page', () => {
  it('shows hero image', () => {
    cy.visit('/');
    cy.get('.h-full > picture > img').should('be.visible');
  });
});
