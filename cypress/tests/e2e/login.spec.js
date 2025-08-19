describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

        // cy.get("[id='username']").type('teste')
        cy.get("[name='username']").type('teste')
    
  });
});