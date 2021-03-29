describe('home page', () => {
  it('shows hero image', () => {
    cy.visit('/');
    cy.contains('Live Life').should('be.visible');
    // cy.get('.h-full > picture > img').should('be.visible');
  });
});
