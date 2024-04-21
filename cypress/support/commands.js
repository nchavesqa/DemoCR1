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

