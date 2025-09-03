function calcularDesconto(compra, desconto) {
  return compra - (compra * desconto / 100);
}

module.exports = { calcularDesconto };