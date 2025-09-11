describe('Login', () => {

  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')

    cy.get('[name="username"]').type('teste')
    cy.get('[id="password"]').type('asdasds')
    cy.contains('button', 'Sign In').click()
  });


  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('teste')
    cy.get('[id="password"]').type('123456')
    cy.contains('button', 'Sign In').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  });


  it.only('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    
    
    
  });



});