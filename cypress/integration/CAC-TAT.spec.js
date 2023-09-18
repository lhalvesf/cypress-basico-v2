/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {

        cy.get('input[name="firstName"]')
        .type('Luiz', {delay: 0})
        .should('have.value', 'Luiz')

        cy.get('input[name="lastName"]')
        .type('Ferreira')
        .should('have.value', 'Ferreira')

        cy.get('input[id="email"]')
        .type('lh.alvesf@gmail.com')
        .should('have.value', 'lh.alvesf@gmail.com')

        cy.get('textarea[name="open-text-area"]')
        .type('Minha mensagem')
        .should('have.value', 'Minha mensagem')

                cy.contains('button', 'Enviar')

        .click()

        cy.get('span[class="success"]').should('be.visible')

        cy.get('span[class="success"] > strong').should('have.text', 'Mensagem enviada com sucesso.')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

        cy.get('input[name="firstName"]')
        .type('Luiz', {delay: 0})
        .should('have.value', 'Luiz')

        cy.get('input[id="email"]')
        .type('lh.alvesf@gmail.com')
        .should('have.value', 'lh.alvesf@gmail.com')

        cy.get('textarea[name="open-text-area"]')
        .type('Minha mensagem')
        .should('have.value', 'Minha mensagem')

                cy.contains('button', 'Enviar')

        .click()

        cy.get('span[class="error"]').should('be.visible')

        cy.get('span[class="error"] > strong').should('have.text', 'Valide os campos obrigatórios!')
    })

    it('Telefone: se um valor não-numérico for digitado, seu valor continuará vazio.', () => {
        cy.get('input[id="phone"]')
        .type('a')
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

        cy.get('input[id="email-checkbox"]').check()
        cy.get('input[id="email"]').should('have.value','')

                cy.contains('button', 'Enviar')

        .click()

        cy.get('span[class="error"]').should('be.visible')
        cy.get('span[class="error"] > strong').should('have.text', 'Valide os campos obrigatórios!')
    })

    // Exercício 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

                cy.contains('button', 'Enviar')

        .click()

        cy.get('input[name="firstName"]')
        .clear().should('have.value', '')

        cy.get('input[id="email"]')
        .clear().should('have.value', '')

        cy.get('textarea[name="open-text-area"]')
        .clear().should('have.value', '')

        cy.get('input[id="email-checkbox"]')
        .uncheck().should('not.be.checked')
    })


    // Exercício extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
                cy.contains('button', 'Enviar')

        .click()

        cy.get('span[class="error"]').should('be.visible')
        cy.get('span[class="error"] > strong').should('have.text', 'Valide os campos obrigatórios!')
    })

    // Exercício extra 7 - Comandos customizados
    it('Criar um teste chamado envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
    })




    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select[id="product"]').select('YouTube')
        .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('select[id="product"]').select('mentoria')
        .should('have.value', 'mentoria')
    })

    it('Crie um novo teste chamado seleciona um produto (Blog) por seu índice', () => {
        cy.get('select[id="product"]').select(1)
        .should('have.value', 'blog')
    })



    it('Crie um teste chamado marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"]').check('feedback')
        .should('have.value', 'feedback')
    })

    it('Crie um teste chamado marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]').check('ajuda')
        .should('be.checked')

        cy.get('input[type="radio"]').check('elogio ')
        .should('be.checked')

        cy.get('input[type="radio"]').check('feedback')
        .should('be.checked')
    })


    it('Crie um teste chamado marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]').check('email')
        .should('be.checked')

        cy.get('input[type="checkbox"]').check('phone')
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')

    })

    it('Crie um teste chamado marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]').check('email')
        .should('be.checked')

        cy.get('input[type="checkbox"]').check('phone')
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')

    })



    // it('Crie um teste chamado seleciona um arquivo da pasta fixtures', () => {
    //     cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
    //     .should((input) => {
    //         expect(input[0].files[0].name).to.equal('example.json')
    //     })
    // })

    // it('seleciona um arquivo simulando um drag-and-drop', () => {
    //     cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
    //     .should((input) => {
    //         expect(input[0].files[0].name).to.equal('example.json')
    //     })
    // })

    // it('chamado seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    //     cy.fixture('example.json').as('sampleFile')

    //     cy.get('input[type="file"]').selectFile('@sampleFile')
    //     .should((input) => {
    //         expect(input[0].files[0].name).to.equal('example.json')
    //     })
    // })



    // it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    //     cy.get('a[href="privacy.html"]')
    //     .should('have.attr', 'target', '_blank')
    // })

    // it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    //     cy.get('a[href="privacy.html"]')
    //     .invoke('removeAttr', 'target')
    //     .click()
    // })

    // it('testa a página da política de privacidade de forma independente', () => {
    //     cy.visit('./src/privacy.html')
    //     cy.get('body')
    //     .should('exist')
    // })

  })