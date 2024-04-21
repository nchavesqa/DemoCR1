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

   it("MouseOver y Pruebas Chatbot", ()=>{

      Cypress.on("uncaught:exception", (e, runnable) => {
         return true;
      });

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
      cy.wait(time)

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

   it("Carga de Archivos y Manejo de Tablas", ()=>{

      const filePath = 'cypress/fixtures/Lista de Ganadores.xlsx'
      const filePath2 = 'cypress/fixtures/image.jpg'
      const data = []
      
      //Inicio de Sesión
      cy.visit('http://localhost:8090/umbraco')
      cy.get('#umb-username').type('Admin')
      cy.get('#umb-passwordTwo').type('Admin1234!').wait(500)
  
      cy.get('.umb-button__content').click({force:true})   
      cy.wait(1500)

      //Formulario Generador de Ganadores
      cy.visit("http://localhost:8090/generador-de-ganadores/")
      
      // Archivo adjunto incorrecto
      cy.get('#fileparticipantes').selectFile(filePath2).wait(time)

      // Num de ganadores, nombre promocion
      cy.get('#plazo').type('25').tab().type('Promocion Prueba').wait(time)

      // Envío
      cy.get('#btnEnviar').should('be.enabled').should('have.text','Generar Ganadores').click()
      cy.wait(time)

      // Archivo Excel
      cy.get('#fileparticipantes').selectFile(filePath).wait(time)
      cy.get('#btnEnviar').should('be.enabled').click()

      // Tabla de Resultados
      cy.wait(time)
      cy.log('Manejo de Informacion en Tablas')
      
      cy.get('#tblresultados tr').each((element, index, list)=>{

         data[index] = element.text()

      }).then(()=>{

         for(let i=0; i<data.length; i++){
            if(i>=1){              
               cy.log('Ganador '+i+': '+data[i])
            }
         }
      })
   })

})//fin describe