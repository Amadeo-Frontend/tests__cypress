/// <reference types='cypress'>
describe("Teste de funcionalidades de um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um contato", () => {
    cy.get("input").eq(0).type("Amadeo Bon");
    cy.get("input").eq(1).type("Amadeo@teste.com");
    cy.get("input").eq(2).type("(11) 9999-9999");
    cy.get(".adicionar").click();

    // Capturar screenshot
    cy.screenshot("teste_inclusao_contato");
  });

  it("Deve editar um contato existente", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear().type("Gian Souza");
    cy.get('[type="email"]').clear().type("gian@teste.com");
    cy.get('[type="tel"]').clear().type("(11) 1828-8888");
    cy.get(".alterar").click();

    // Capturar screenshot
    cy.screenshot("teste_alteracao_contato");
  });

  it("Deve remover um contato existente", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();

    // Capturar screenshot
    cy.screenshot("teste_remocao_contato");
  });

  it("Deve finalizar os testes", () => {
    expect(true).to.be.true;
    // Capturar screenshot
    cy.screenshot("teste_finalizado");
  });
});
