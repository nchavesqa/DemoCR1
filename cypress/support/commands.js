Cypress.on("uncaught:exception", (e, runnable) => {
    return true;
});

Cypress.Commands.add('UmbracoLogin',()=>{
    cy.visit('http://localhost:8090/umbraco')
    cy.get('#umb-username').type('Admin')
    cy.get('#umb-passwordTwo').type('Admin1234!').wait(500)
    cy.get('.umb-button__content').click({force:true})   
    
})

Cypress.Commands.add('ClickLink',(label)=>{
    cy.get('a').contains(label).click({force:true})  
})

Cypress.Commands.add('ClickButton',(label)=>{
    cy.get('button').contains(label).should('be.enabled').click({force:true})
})

Cypress.Commands.add('ClickSubmit',(label)=>{
    cy.get('[type="submit"]').contains(label).should('be.enabled').click({force:true})
})

Cypress.Commands.add('ClosePopUp',(selector)=>{
    cy.get(selector).click({force: true})
})

function ifExistsErrorMessage (selector, label, errorMessage) {// Manejar excepcion en caso de no encontrar un elemento en el DOM

    cy.document().then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        if (documentResult.length) {
            throw new Error('El Campo '+label+' '+errorMessage)
        }else{
            cy.log('Validación correcta') 
            cy.log('**********************************')
        }
    })
}

function ifNotExistsErrorMessage (selector, label, errorMessage) {
    cy.document().then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        if (documentResult.length) {
            cy.log('Validación correcta') 
            cy.log('**********************************') 
        }else{
            throw new Error('El Campo '+label+' '+errorMessage)
        }
    })
}

  Cypress.Commands.add('ifExistsErrorMessage', ifExistsErrorMessage)

  Cypress.Commands.add('ifNotExistsErrorMessage', ifNotExistsErrorMessage)
