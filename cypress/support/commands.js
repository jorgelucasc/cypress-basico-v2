Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName')
        .type('Jorge Lucas')
    cy.get('#lastName')
        .type('Conrado')
    cy.get('#email')
        .type('jorge@teste.com.br')
    cy.get('#open-text-area')
        .type('teste')
    cy.get('button[type="submit"]')
        .click()
})

