///<reference types='Cypress'/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Landing Referidos Iberia', ()=> {

    var time = 1000
    let message;

    beforeEach(()=>{
        cy.visit('http://localhost:8090/formulario-referidos-iberia/')
        cy.title().should('eq','Formulario Referidos Iberia | Banco Promerica Costa Rica | Grupo Promerica')
        cy.wait(time)
    })

    it('Referidos Iberia - Camino feliz', ()=>{

        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').type('Natalia Chaves').tab().type('12341234').tab().type('nat@prueba.com')
        cy.wait(time)

        cy.get('.btn').click().click({force:true})
        cy.wait(time)

        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').type('Referido Uno').tab().type('24341223')
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').type('87653465').tab().type('nat@prueba2.com')

        cy.get(':nth-child(2) > .btn').click({force:true})
        cy.wait(time)

        cy.get(':nth-child(2) > .btn').click({force:true})
        cy.wait(time)

        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e').check()
        cy.wait(time)

        cy.get(':nth-child(2) > .btn').click({force:true})
        cy.wait(time)

        cy.get('#botonVolver').click({force:true})
    })

    it.only('Referidos Iberia - Mensajes de Error por Datos Incorrectos', ()=>{

        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').type('Natalia')
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').click({force:true})
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af-error').should('be.visible').and('contain.text','Debe ingresar al menos un nombre y un apellido utilizando solo letras y evita caracteres especiales. Además, asegúrate de no finalizar con un espacio.')

        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56').type('12345')
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b').click({force:true})
        cy.get('#\\34 8012b84-6eb4-4120-881b-501a5b2eaa56-error').should('be.visible').and('contain.text','Por favor, introduce solo números y evita caracteres especiales. Además, asegúrate de no finalizar con un espacio.')
        
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b').type('nat@prueba')
        cy.get('.btn').click({force:true}).click({force:true})
        cy.get('#\\33 4930f22-f411-424d-ad47-3159f9b1336b-error').should('be.visible').and('contain.text','Formato de correo electrónico incorrecto.')
        cy.wait(time)

        //Mensaje de error
        cy.get('#mensaje-error').should('be.visible').and('contain.text','Por favor, verifique la información ingresada y asegúrese de completar todos los campos solicitados.')

        // Se completan los datos para pasar a segunda página
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').clear().type('Natalia Chaves').tab().clear().type('1234').tab().clear().type('nat@prueba.com')
        cy.wait(time)

        cy.get('.btn').click({force:true})// Siguiente

        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').type('Referido')
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').click({force:true})
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac-error').should('be.visible').and('contain.text','Debe ingresar al menos un nombre y un apellido utilizando solo letras y evita caracteres especiales. Además, asegúrate de no finalizar con un espacio.')
        
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a').type('243412')
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').click({force:true})
        cy.get('#\\36 34a07d1-0c42-43d8-9735-c381a645bd5a-error').should('be.visible').and('contain.text','Debe ingresar un número telefónico valido')

        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0').type('876534')
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489').click({force:true})
        cy.get('#\\36 2d6cae7-7513-41d6-ff58-57282266efd0-error').should('be.visible').and('contain.text','Debe ingresar un número telefónico valido')
        
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489').type('nat@prueba')
        cy.get(':nth-child(2) > .btn').click({force:true})
        cy.get('#\\34 30c775a-963d-4dcc-9673-7be673ee2489-error').should('be.visible').and('contain.text','Formato de correo electrónico incorrecto.')

        // Se completan los datos para pasar a tercera página
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Referido Uno').tab().clear().type('24341223').tab().clear().type('87653465').tab().clear().type('nat@prueba.com')
        cy.wait(time)

        cy.get(':nth-child(2) > .btn').click({force:true}) // Siguiente

        // Se continua a la cuarta página
        cy.get(':nth-child(2) > .btn')

        cy.get(':nth-child(2) > .btn').click({force:true})// Boton Enviar Solicitud
        cy.wait(time)

        // Error Terminos y condiciones
        cy.get('#\\39 3d0c753-cc11-449b-9cfb-aa273822039e-error').should('be.visible').and('contain.text', 'Campo requerido')
        cy.get('#mensaje-error').should('be.visible').and('contain.text','Por favor, verifique la información ingresada y asegúrese de completar todos los campos solicitados.')
    })


    it('Referidos Iberia - Mensajes de error por Campos Vacíos', ()=>{

        cy.get('.btn').click({force:true})
        cy.wait(time)

        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#48012b84-6eb4-4120-881b-501a5b2eaa56-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#34930f22-f411-424d-ad47-3159f9b1336b-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#mensaje-error').should('be.visible').and('contain.text','Por favor, verifique la información ingresada y asegúrese de completar todos los campos solicitados.')

        // Se completan los datos para pasar a segunda página
        cy.get('#c559d483-4aab-4e5e-b4e7-2395f4e764af').clear().type('Natalia Chaves').tab().clear().type('1234').tab().clear().type('nat@prueba.com')
        cy.wait(time)

        cy.get('#78708e5d-14b4-46bf-d941-dda6551274ac-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#634a07d1-0c42-43d8-9735-c381a645bd5a-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#62d6cae7-7513-41d6-ff58-57282266efd0-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#430c775a-963d-4dcc-9673-7be673ee2489-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#mensaje-error').should('be.visible').and('contain.text','Campo requerido')
        
        // Se completan los datos para pasar a tercera página
        cy.get('#\\37 8708e5d-14b4-46bf-d941-dda6551274ac').clear().type('Referido Uno').tab().clear().type('24341223').tab().clear().type('87653465').tab().clear().type('nat@prueba.com')
        cy.wait(time)
        
        // Se continua a la cuarta página
        cy.get(':nth-child(2) > .btn')

        cy.get('#93d0c753-cc11-449b-9cfb-aa273822039e-error').should('be.visible').and('contain.text','Campo requerido')
        cy.get('#mensaje-error').should('be.visible').and('contain.text','Campo requerido')

    })


})//fin describe