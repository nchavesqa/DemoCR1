///<reference types='Cypress'/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Description', { testIsolation: false }, ()=> {
    var time = 1000

    before(()=>{
        cy.visit('http://localhost:8053/')
        cy.wait(time)
    })

    it('Visitar Sección Tarjetas de Crédito', ()=>{
        cy.get('.menu > :nth-child(2) > ul > :nth-child(1) > a').click({force:true});
        cy.wait(time)
        cy.get('.close').click();

    })

    it('Abrir detalle y Formulario de Tarjeta', ()=>{

        cy.get('#elemTarjeta0 > .box > .box-info > .btn-link').as('Boton Ver más').click({force:true});
        cy.get('#btndetSend').as('Botón Solicitar').click({force:true})

    })

    it('Completar formulario de Solicitud', ()=>{

        //cy.visit('http://localhost:8053/banca-de-personas/tarjetas-de-credito/formulario-solicitud-de-tarjetas-de-credito/')

        cy.get('#f0ec6c57-2b33-4319-f58b-550225331f10').clear().type('Natalia Prueba');
        
        cy.get(':nth-child(2) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(2) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content > :nth-child(2)').click();
        
        cy.get('#bc1fafe6-40f7-4ff6-d3a2-91af1251043b').clear().type('509879067');
        
        cy.get('#\\39 f905a5d-fa71-488e-b343-63191ba5d390').clear().type('nat@prueba.com');
        
        cy.get('#\\39 72b652f-ea09-46df-c38a-cbffc19440d0').clear().type('24567899');
        
        cy.get('#\\32 051aa66-2b01-414e-bd2f-f1ef89e7935a').clear().type('88908876');
        cy.get(':nth-child(7) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.simplebar-content > [onclick="cambiarProvincia(2);"]').click();
        
        cy.get(':nth-child(8) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > [onclick="cambiarCanton(22);"]').click();
        
        cy.get(':nth-child(9) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > :nth-child(140)').click();
        
        cy.get('#f92d3e1b-c30e-4daa-a965-36e6e8f5e733').clear().type('Domicilio Prueba 1');
        
        cy.get('.btn').click();
        
        cy.get('#c2a667de-d9e0-42cc-d8d0-415d56058d44').clear().type('Empresa Prueba');
        
        cy.get('#c2b557b1-05d2-49c7-b13c-7f59cc3293dd').clear().type('Puesto de Prueba');
        
        cy.get('.select-selected').click();
        cy.get('.simplebar-content > :nth-child(5)').click();
        
        cy.get(':nth-child(2) > .btn').click();
        
        cy.get('.select-selected').click();
        cy.get('.simplebar-content > :nth-child(4)').click();
        
        cy.get('#\\33 9010b13-4131-4827-dbda-22b9279ae22b').check();
        cy.get('#\\38 8b9644c-8f73-4413-fd0a-83f58cc5b581').check();

        //cy.get(':nth-child(2) > .btn').as('Botón Enviar').click({force:true})
    })
    
})//fin describe