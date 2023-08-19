Cypress.Commands.add('loginComSucesso', function(){
    cy.get('#login').type('gwsistemas.agenda@gmail.com')
    cy.get('#senha').type('GW$!sT&M@s')
    cy.contains('button','Login').click()
    cy.contains('figure','Colaborador').click()
    cy.get('#inptPesquisarOrganizacao').type('GWSISTEMAS QA')
    cy.get('#divOrganizacoes > :nth-child(4)').click()
    //fiz deste modo so para poder logar, ṕorem não é a melhor opção
})