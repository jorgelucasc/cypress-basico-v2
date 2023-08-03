/// <reference types="Cypress"/>

describe('Automacao Regressivo GW Sistemas', function(){

    beforeEach(function(){
        cy.visit('https://gwsistemas-hom.gwcloud.com.br/')

        cy.loginComSucesso()
    })

    it('Entrando no Cad Cliente', function(){
        
        cy.contains('label','Cadastros').click()

        cy.get("a").contains('label','Cadastros').trigger('mouseover').contains(".label","Clientes")

        cy.contains('label','Clientes').click()
        
    })

})

//cy.get('li#menu_performance_Configure').trigger('mousedown', { button: 0 }).
//cy.get("a").contains("Performance").find("li#menu_performance_Configure").trigger('mouseover')
//cy.get("a").contains("Performance").trigger("mouseenter").find("li#menu_performance_Configure").trigger('mouseover')
//cy.get("a").contains("Performance").trigger("mouseover").find("li#menu_performance_Configure").trigger("mouseover")