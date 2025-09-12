import userDados from '../../fixtures/userDados.json'

describe('Login', () => {

  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type(userDados.dadosUserSucess.user)
    cy.get('[id="password"]').type(userDados.dadosUserSucess.password)
    cy.contains('button', 'Sign In').click()
  });


  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type(userDados.dadosUserFail.user)
    cy.get('[id="password"]').type(userDados.dadosUserFail.password)
    cy.contains('button', 'Sign In').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  });


  it.only('Deve registrar um novo usuário  com informações válidas', () => {
    cy.visit('http://localhost:3000/s ignin')
    cy.get('[data-test="signup"]').click()
    cy.get('[id="firstName"]').type('Silvio')
    cy.get('[id="lastName"]').type('Filho')
    cy.get('[id="username"]').type('sfilho')
    cy.get('[id="password"]').type('123456')
    cy.get('[id="confirmPassword"]').type('123456')
    cy.get('[data-test="signup-submit"]').click()

  });


  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('[id="firstName"]').type('Jao')
    cy.get('[id="lastName"]').type('Filho')
    cy.get('[id="username"]').click()
    cy.get('[id="password"]').type('123456')
    cy.get('[id="confirmPassword"]').type('123456')

    cy.contains('p', 'Username is required')
      .should('be.visible')
    // cy.get('[data-test="signup-submit"]').click()


  });



});