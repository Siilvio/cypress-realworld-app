import userDados from '../../fixtures/userDados.json'

describe('Visualizar histórico de transações com sucesso', () => {

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
     
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type(userDados.dadosUserSucess.user)
    cy.get('[id="password"]').type(userDados.dadosUserSucess.password)
    cy.contains('button', 'Sign In').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.contains('span' , 'Silvio Filho').should('be.visible')


  });

});
