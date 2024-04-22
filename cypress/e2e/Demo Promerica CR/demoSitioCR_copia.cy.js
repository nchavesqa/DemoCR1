///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo 2 - Automatizacion con Cypress Promerica CR", ()=> {

   var time = 1000

   it("Aserciones en Sección Tarjetas de Crédito", ()=>{

      cy.visit("http://localhost:8090/banca-de-personas/tarjetas-de-credito/")
      cy.log('Promerica Costa Rica - Sección Tarjetas de Crédito')
      cy.wait(time)

      cy.ClosePopUp('.close')

      cy.get('#elemTarjeta10').find('h3').then((elem)=>{ // Prueba con tarjeta de crédito Universal

         let title = elem.text()
         cy.log('Tarjeta: '+elem.text())

         cy.get('#elemTarjeta10').find('.btn-link').should('have.attr','datatarj',''+title).click({force: true})
         cy.wait(time)

         cy.get('.img-tarjeta').should('be.visible')
         cy.get('h1').should('have.text',''+title)
         cy.wait(time)

         cy.get('h3').contains('Todas las tarjetas le brindan').scrollIntoView()
         cy.wait(time)
         
         cy.get('#tab2').click({force: true}).wait(time)
         cy.get('#tab1').click({force: true}).wait(time)
         cy.wait(time)

         cy.get('.icono-flecha-atras').eq(1).click({force: true}) 
         
      })
      cy.wait(2000)
   })

   it("Test LandingPage - Asistencia Funeraria", ()=>{

      cy.visit("http://localhost:8090/asistencia-funeraria/")
      cy.log('Promerica Costa Rica - Landing Asistencia Funeraria')
      cy.wait(time)

      //Validaciones en Titulo, Cards y Disclaimer
      cy.get('h2').eq(0).should('be.visible').should('have.text','Beneficios de las tarjetas de crédito')
      cy.get('.lstCardsForm').should('be.visible').and('have.css','font-family','"Nunito Sans", Tahoma').and('have.css','font-size','16px')
   
      cy.get('h2').eq(1).should('be.visible').and('have.text','Asistencia funeraria con cobertura familiar')

      cy.get('.disclaimer').should('be.visible').and('contain.text','* La aprobación de tu tarjeta está condicionada a un estudio crediticio que se realizará con los datos proveídos por el solicitante.')

      cy.get('.contenidoFooter').should('be.visible').should('contain.text','Banco Promerica 2024 | Grupo Promerica')

      // Formulario

      // Nombre, apellidos
      cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Nombre Prueba').tab().type('Apellidos Prueba').tab()

      // Tipo Identificacion
      cy.get('.contenedorSelectItems').eq(0).invoke('show').find('.opcionSelect').eq(1).click({force:true})
      
      // Identificacion, correo y telefono
      cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('209870909').tab().type('nat@prueba.com').tab().type('23448911').tab().type('11112345')

      // Provincia
      cy.get('.contenedorSelectItems').eq(1).invoke('show').find('.opcionSelect').eq(4).click({force:true})

      // Canton
      cy.get('.contenedorSelectItems').eq(2).find('.opcionSelect').not('.hidden').invoke('show').eq(2).click({force:true})

      // Distrito
      //cy.get('.contenedorSelectItems').eq(3).find('.opcionSelect').not('.hidden').invoke('show').eq(2).click({force:true})

      // Fecha
      cy.get('#25371b7d-4e96-4210-9f52-483ff5b365cd').type('2000-06-19')

      // Estado Civil
      cy.get('.contenedorSelectItems').eq(4).find('.opcionSelect').eq(2).click({force:true})
      
      // Empresa, num Tarjeta
      cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Empresa Prueba').tab().type('1234')

      cy.ClickSubmit('Siguiente')

      // Nombre Beneficiario
      cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Beneficiario Prueba')

      // Tipo Identificacion
      cy.get('.contenedorSelectItems').invoke('show').find('.opcionSelect').eq(1).click({force:true})

      //Identificacion + Fecha Nacimiento
      cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').type('580203349').tab().type('2022-04-30')

      // Checkbox
      cy.get('[type="checkbox"]').check().should('be.checked')
      cy.wait(time)

      cy.get('.CheckBoxContainer').eq(0).find('label').should('contain.text','Doy permiso a Banco Promerica para ser contactado por WhatsApp')
      cy.get('.CheckBoxContainer').eq(1).find('label').should('contain.text','Acepto términos y condiciones')

      // Abrir link de terminos y condiciones en la misma pestaña
      //cy.get('a').should('have.attr', 'target', '_blank').invoke('attr', 'target', '_self').click()

      // Boton Volver
      //cy.ClickSubmit('Volver')

      // Boton Solicitar
      cy.ClickSubmit('Solicitar')
      cy.wait(2000)
   })

})//fin describe