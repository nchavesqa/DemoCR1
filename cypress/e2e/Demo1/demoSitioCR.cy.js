///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo 2 - Automatizacion con Cypress Promerica CR", ()=> {

   var time = 1000

   it(" Validacion de Titulo, Propiedades y Etiquetas Meta", ()=>{

      let metaViewport = 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'
      let description = 'Bienvenidos al nuevo sitio Promerica Costa Rica'
      let keyWords = 'Promerica,Banco Promerica'
      let author = 'Banco Promerica Costa Rica'
      let ogUrl = 'https://promerica.fi.cr'
      let ogImage = 'https://www.promerica.fi.cr/media/1004/promerica_cr_155x90png.png'

      cy.visit("http://localhost:8090/")
      cy.log('Sitio Promerica Costa Rica')
      cy.wait(time)

      // Propiedades
      cy.title().should('eq','Banco Promerica Costa Rica | Grupo Promerica')
      cy.wait(time)

      cy.get('html').should('have.attr','lang','es')
      cy.wait(time)

      //cy.url().should('eq','https://promerica.fi.cr')

      // Etiquetas Meta
      cy.get('head meta[name=viewport]').should('have.attr','content', metaViewport)
      cy.get('head meta[name=keywords]').should('have.attr','content', keyWords)
      cy.get('head meta[name=description]').should('have.attr','content', description)
      cy.get('head meta[name=author]').should('have.attr','content', author)
      cy.get('head meta[property="og:url"').should('have.attr','content', ogUrl)
      cy.get('head meta[property="og:image"').should('have.attr','content', ogImage)
      cy.wait(time)

      cy.get('head link[rel=canonical]').should('have.attr','href','http://localhost:8090/')
      cy.wait(2000)

   })

   it("Test Formulario con Select/Checkbox", ()=>{

      cy.visit("http://localhost:8090/banca-de-personas/formulario-solicitud-de-tarjeta-para-colegio-profesional/")
      cy.log('Promerica Costa Rica - Formulario Solicitud de Tarjeta para Colegio Profesional')
      cy.wait(time)

      // Validar titulo
      cy.get('hgroup > h2').should('have.text','Formulario Solicitud de Tarjeta para Colegio Profesional')

      // Select
      cy.get('#tipoIdentificacion').should('be.visible').select([2]).should('have.value','DIMEX')
      cy.wait(time)

      cy.get('#salarioAproximado').should('be.visible').select([3]).should('have.value','De ¢850.000 a ¢999.999')
      cy.wait(time)

      cy.get('#tipoTarjeta').should('be.visible').select('Colegio de Contadores (CPI)')
      cy.wait(time)

      //Checkbox
      cy.get('.lbltermcond').should('be.visible').click({force: true})
      cy.wait(time)

      // Enviar form
      cy.ClickButton('Aplicar ahora')

      // Completar form
      cy.get('#nombre').type('Nat Prueba')
      cy.get('#identificacion').type('567455689').tab().type('Puesto Prueba').tab().type('Liberia')
      cy.get('#correoElectronico').type('nat@prueba.com').tab().type('24234234').tab().type('Empresa Prueba')

      // Enviar form
      cy.ClickButton('Aplicar ahora')
      cy.wait(2500)

   })

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

   it.only("MouseOver y Pruebas Chatbot", ()=>{

      cy.visit("http://localhost:8090/")
      cy.log('Promerica Costa Rica - Menu Principal')
      cy.wait(time)
      
      // Mouse over en Menu PrincipaL del sitio
      for(let i=1; i<=5; i++){
         cy.xpath('//*[@id="main_nav"]/div/ul/li['+i+']/ul').invoke('show').wait(200).invoke('attr','style','display:none')
      }

      // Página Otros Servicios - Error
      cy.xpath('//*[@id="main_nav"]/div/ul/li[2]/ul').invoke('show').wait(200)
      cy.xpath('//*[@id="main_nav"]/div/ul/li[2]/ul/li[7]/a').click({force:true})
      cy.request('http://localhost:8090/banca-de-personas/otros-servicios/').should((response)=>{
         expect(response.status).to.eq(200)
     })

      cy.go('back')// volver a Home
      cy.wait(time)

      // Pruebas Chatbot
      cy.get('#botonOpcionesChat > img').click()

      cy.get('footer > .container').scrollIntoView().wait(time)
      cy.get('#logo_promerica > span').scrollIntoView().wait(time)

      cy.get('.oda-chat-message-actions > :nth-child(1) > div').click().wait(time)
      cy.get(':nth-child(3) > .oda-chat-messages-wrapper > .oda-chat-message-list > .oda-chat-message > .oda-chat-message-wrapper > .oda-chat-message-bubble > .oda-chat-message-actions > :nth-child(1)').click().wait(time)

      cy.get('.oda-chat-user-input').type('508980345')
      cy.get('.oda-chat-button-send').click()
      cy.wait(3500)

      cy.get('#oda-chat-end-conversation').click({force:true})
      cy.wait(2500)
      cy.get('.oda-chat-filled').click({force:true})
      cy.wait(2000)
   })

   it("Test Select/Radio Button - Bienes en Venta", ()=>{

      cy.visit("http://localhost:8090/seccion-venta-bienes/")
      cy.log('Promerica Costa Rica - Venta de Bienes')
      cy.wait(time)

      cy.get('.mb-2').scrollIntoView().wait(time)
      
      cy.get('.form-group > .dropdown > .btn').click()// Dropdown Tipo
      cy.get('#bs-select-1-1').click({force:true})
      cy.wait(time)

      cy.get(':nth-child(2) > .form-group > .form-control-custom > .dropdown > .btn').click()// Dropdown Provincia
      cy.get('#bs-select-2-4').click({force:true})
      cy.wait(time)

      //cy.get(':nth-child(3) > .form-group > .form-control-custom > .dropdown > .btn')// Dropdown Canton

      //cy.get(':nth-child(4) > .form-group > .form-control-custom > .dropdown > .btn')// Dropdown Distrito

      cy.get('#filtroOrdenamiento2').check().should('be.checked')

      cy.get('#btnBuscador').should('be.visible').and('be.enabled').click()
      cy.wait(time)

      cy.get('#filtroOrdenamiento1').check().should('be.checked')

      cy.get('#btnBuscador').should('be.visible').and('be.enabled').click()
      cy.wait(2000)
   })

})//fin describe