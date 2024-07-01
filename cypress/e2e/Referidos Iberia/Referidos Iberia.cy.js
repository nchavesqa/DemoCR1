///<reference types='Cypress'/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe.only('Referidos Iberia - Datos Correctos', { testIsolation: false }, ()=> {

    var time = 1500
    before(()=>{
        cy.visit('http://localhost:8090/formulario-referidos-iberia/')
    })

    beforeEach(()=>{
        //cy.viewport('ipad-mini')
        // cy.viewport('iphone-6+')
    })

    it('Validación campo Nombre completo', ()=>{
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').as('Nombre completo').type('Natalia Chaves').tab()
        cy.ifExistsErrorMessage('#c559d483-4aab-4e5e-b4e7-2395f4e764af-error','Nombre completo','no permite ingresar el formato correcto')
    })

    it('Validación campo IB Plus', ()=>{
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').as('IB Plus').type('12341234').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56-error','IB Plus','no permite ingresar el formato correcto')
    })

    it('Validación campo Correo electrónico', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b').as('Correo electrónico').type('nat@prueba.com').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\33 4930f22-f411-424d-ad47-3159f9b1336b-error','Correo electrónico','no permite ingresar el formato correcto')
    })

    it('Paso a Segunda Página', ()=>{
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').clear().type('Natalia Chaves').tab().clear().type('1234').tab().clear().type('nat@prueba.com')
        cy.get('.btn').click({force:true})
    })

    it('Validación campo Nombre Referido', ()=>{ 
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').as('Nombre Referido').type('Natalia Chaves').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac-error','Nombre Referido','no permite ingresar el formato correcto')
    })

    it('Validación campo Telefono Fijo', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').as('Telefono Fijo').type('22452788').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a-error','Telefono Fijo','no permite ingresar el formato correcto')
    })

    it('Validación campo Telefono Celular', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').as('Telefono Celular').type('22452788').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0-error','Telefono Celular','no permite ingresar el formato correcto')
    })

    it('Validación campo Correo electrónico Referido', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489').as('Correo electrónico Referido').type('nat@prueba.com').tab()
        cy.wait(time)
        cy.ifExistsErrorMessage('#\\34 30c775a-963d-4dcc-9673-7be673ee2489-error','Correo electrónico','no permite ingresar el formato correcto')
    })

    it('Paso a Tercera Página', ()=>{
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Paso a Cuarta Página', ()=>{
        //cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Validación campo Terminos y Condiciones', ()=>{
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').as('Terminos y Condiciones').should('be.enabled')
        cy.wait(time)
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').check().should('be.checked')
    })
})//fin describe

describe('Referidos Iberia - Datos con Numeros o Texto', { testIsolation: false }, ()=> {

    var time = 1300

    before(()=>{
        cy.visit('http://localhost:8090/formulario-referidos-iberia/')
    })

    it('Validación campo Nombre completo', ()=>{// CAMPO DE TEXTO
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').as('Nombre completo').clear().type('123 123').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#c559d483-4aab-4e5e-b4e7-2395f4e764af-error','Nombre completo','admite números')
    })

    it('Validación campo IB Plus', ()=>{ // CAMPO NUMERICO
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').as('IB Plus').clear().type('prueba').tab()// Que no admita texto
        cy.wait(time)
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').should('contain.text','').then(()=>{
            cy.log('Validacion correcta')
        })
    })

    it('Validación campo Correo electrónico', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b').as('Correo electronico').clear().type('nat@prueba').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\33 4930f22-f411-424d-ad47-3159f9b1336b-error','Correo electrónico','admite correo con formato incorrecto')
    })

    it('Paso a Segunda Página', ()=>{
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').clear().type('Natalia Chaves').tab().clear().type('1234').tab().clear().type('nat@prueba.com')
        cy.get('.btn').click({force:true})
    })

    it('Validación campo Nombre Referido', ()=>{ 
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').as('Nombre Referido').clear().type('123 123').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac-error','Nombre Referido','admite números')
    })

    it('Validación campo Telefono Fijo', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').as('Telefono Fijo').clear().type('prueba').tab() // NO ADMITE LETRAS
        cy.wait(time)
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').should('contain.text','')
    })

    it('Validación campo Telefono Celular', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').as('Telefono Celular').clear().type('prueba').tab()
        cy.wait(time)
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').should('contain.text','')
    })

    it('Validación campo Correo electrónico Referido', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489').as('Correo electronico').clear().type('nat@prueba').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\34 30c775a-963d-4dcc-9673-7be673ee2489-error','Correo electrónico','admite correo con formato incorrecto')
    })

    it('Paso a Tercera Página', ()=>{
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Paso a Cuarta Página', ()=>{
        //cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Validación campo Terminos y Condiciones', ()=>{ // CAMPO CHECKBOX
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').as('Terminos y Condiciones').should('be.enabled')
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').check().should('be.checked')
        cy.wait(time)
    })
})//fin describe

describe('Referidos Iberia - Datos con Caracteres especiales', { testIsolation: false }, ()=> {

    var time = 1300
    before(()=>{
        cy.visit('http://localhost:8090/formulario-referidos-iberia/')
    })

    it('Validación campo Nombre completo', ()=>{
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').as('Nombre completo').clear().type('Natalia @ !!').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#c559d483-4aab-4e5e-b4e7-2395f4e764af-error','Nombre completo','admite caracteres especiales')
    })

    it('Validación campo IB Plus', ()=>{ // CAMPO NUMERICO
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').as('IB Plus').clear().type('Natalia @ !!').tab()
        cy.wait(time)
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').should('contain.text','')
    })

    it('Validación campo Correo electrónico', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b').as('Correo electronico').clear().type('natprueba.com').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\33 4930f22-f411-424d-ad47-3159f9b1336b-error','Correo electrónico','admite correo con formato incorrecto')
    })

    it('Paso a Segunda Página', ()=>{
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').clear().type('Natalia Chaves').tab().clear().type('1234').tab().clear().type('nat@prueba.com')
        cy.get('.btn').click({force:true})
    })

    it('Validación campo Nombre Referido', ()=>{ 
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').as('Nombre Referido').clear().type('Natalia @ !!').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac-error','Nombre Referido','admite caracteres especiales')
    })

    it('Validación campo Telefono Fijo', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').as('Telefono Fijo').clear().type('@ @ @ !!').tab()
        cy.wait(time)
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').should('contain.text','')
    })

    it('Validación campo Telefono Celular', ()=>{ // CAMPO NUMERICO
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').as('Telefono Celular').clear().type('@ @ @ !!').tab()
        cy.wait(time)
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').should('contain.text','')
    })

    it('Validación campo Correo electrónico Referido', ()=>{ // CAMPO ALFANUMERICO
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489').as('Correo electrónico Referido').clear().type('natprueba.com').tab()
        cy.wait(time)
        cy.ifNotExistsErrorMessage('#\\34 30c775a-963d-4dcc-9673-7be673ee2489-error','Correo electrónico','admite correo con formato incorrecto')
    })

    it('Paso a Tercera Página', ()=>{
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Paso a Cuarta Página', ()=>{
        //cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Prueba Referido').tab().clear().type('24401234').tab().clear().type('88901287').tab().clear().type('nat@prueba.com')
        cy.get(':nth-child(2) > .btn').click({force:true})
    })

    it('Validación campo Terminos y Condiciones', ()=>{
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').as('Terminos y Condiciones').should('be.enabled')
        cy.wait(time)
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').check().should('be.checked')
    })
})//fin describe