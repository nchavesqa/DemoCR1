///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe("", ()=> {

    it("Test ", ()=>{

        let time = 1000

        cy.visit("") 
        cy.title().should('eq','')
        cy.wait(time)
         
    })//fin it

})//fin describe