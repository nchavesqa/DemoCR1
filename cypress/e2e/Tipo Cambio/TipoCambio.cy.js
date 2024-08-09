///<reference types='Cypress'/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Description', ()=> {

    var time = 1000

    beforeEach(()=>{
        cy.visit('http://localhost:8052/')
        cy.wait(time)
    })

    it('Seccion Tipo de Cambio HomePage', ()=>{

        cy.get('#tipoCambioHome').should('be.visible')
        cy.get('#tipoCambioCompra').as('Compra').should('be.visible').then(($compra) => {

            const compraText = $compra.text().trim()
            expect(compraText).to.not.equal('0.00')

        })

        cy.get('#tipoCambioVenta').as('Venta').should('be.visible').then(($venta)=>{
            
            const ventaText = $venta.text().trim()
            expect(ventaText).to.not.equal('0.00')
        })

        cy.get('nav > .btn').as('Historico Tipo Cambio').click({force:true})
        cy.wait(time)

    })

})//fin describe