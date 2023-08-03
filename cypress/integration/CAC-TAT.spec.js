/// <reference types="Cypress"/>

describe('Central de atendimento ao cliente TAT', function(){

    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o titulo da aplicação', function(){
        cy.title('#title')
        .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('Preenche campos já existentes e clica em Enviar', function(){
        const longText = 'Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,'
        cy.get('#firstName')
        .type('Jorge Lucas')
        cy.get('#lastName')
        .type('Conrado')
        cy.get('#email')
        .type('jorge@teste.com.br')
        cy.get('#open-text-area')
        .type(longText,{delay:0})
        cy.contains('button','Enviar')
        .click()

        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter formulario com um email invalido', function(){
        cy.get('#firstName')
        .type('Jorge Lucas')
        cy.get('#lastName')
        .type('Conrado')
        cy.get('#email')
        .type('jorgeteste.com.br')
        cy.get('#open-text-area')
        .type('Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,'
        ,{delay:0})
        cy.contains('button','Enviar')
        .click()
        cy.contains('.error','Valide os campos obrigatórios!').should('be.visible')
    })

    it('campo telefone continua vazio ap preencher com valor nao numerico', function(){
        cy.get('#phone').type('teste')
        .should('have.value','')
    })
    
    it('exibe erro quando telefone se torna obrigatorio mas nao é preenchido', function(){
        const longText = 'Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,Teste Curso,'
        cy.get('#firstName')
        .type('Jorge Lucas')
        cy.get('#lastName')
        .type('Conrado')
        cy.get('#phone-checkbox').should('be.enabled').check()
        cy.get('#email')
        .type('jorge@teste.com.br')
        cy.get('#open-text-area')
        .type(longText,{delay:0})
        cy.contains('button','Enviar')
        .click()
        cy.contains('.error','Valide os campos obrigatórios!').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter form sem preencher campos obrigatorios', function(){
        cy.contains('button','Enviar')
        .click()
        cy.contains('.error','Valide os campos obrigatórios!').should('be.visible')
    })

    it('novo teste', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('selecionando produto do select na tela pelo texto', function(){
        cy.get('#product').select('Cursos')
        .should('have.value','cursos')
    })

    it('marca o tipo de atendimento ELOGIO', function(){
        cy.get('input[type="radio"]')
        .check('elogio')
        .should('have.value','elogio')
    })
    
    it('marca todos os tipo de atendimento', function(){
        cy.get('input[type="radio"]')
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
            //pega todos os elementos do tipo input na tela
            //e faz um check em cada 1, e depois verifica se foi marcado
        })
    })

    it('marca todos os check e desmarca um', function(){
        cy.get('input[type="file"]')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica se ao clicar abre em outra aba', function(){
        cy.get('#privacy a').should('have.attr','target','_blank').click()
    })

    it('clica no link removendo target e abrir na mesma aba', function(){
        cy.get('#privacy a').invoke('removeAttr','target').click()
        
        cy.contains('#title','CAC TAT - Política de privacidade').should('be.visible')
    })


})