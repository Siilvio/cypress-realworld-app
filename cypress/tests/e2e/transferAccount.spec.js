import userDados from '../../fixtures/userDados.json'

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type(userDados.dadosUserSucess.user)
    cy.get('[id="password"]').type(userDados.dadosUserSucess.password)
    cy.contains('button', 'Sign In').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[id="user-list-search-input"]').type('jao')
    cy.get('[data-test="user-list-item-MhuQgbCEd"]').click()
    cy.get('[id="amount"]').type('10000')
    cy.get('[id="transaction-create-description-input"]').type('Seu Dinheiro Rapido')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    // cy.contains('span' , 'Complete').should('be.visible')
    cy.get('[data-test="alert-bar-success"]').should('be.visible')
  });

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    
  });


});