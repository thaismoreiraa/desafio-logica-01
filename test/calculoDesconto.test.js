const { calcularDesconto } = require('../src/calculoDesconto');
const { expect } = require('chai');

describe('Teste da Função de Calcular Desconto', function () {
  it('A Função deve ser capaz de subtrair o desconto em percentual do valor da compra', function () {
    const resultadoDaSubtracao = calcularDesconto(400, 12);

    expect(resultadoDaSubtracao).to.equal(352)
  });
});