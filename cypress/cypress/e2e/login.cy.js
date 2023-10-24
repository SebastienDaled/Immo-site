describe('login page', () => {

                

  // This hook runs before each test case and navigates to the login page
  beforeEach(() => {
      cy.visit('localhost:3000')
  })

  it('should login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.undefined').type('UserTest');
    cy.get('#password').should('be.visible').type('1234');
    cy.get('.btn').click();
  });
})