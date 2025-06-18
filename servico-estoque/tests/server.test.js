const assert = require('assert');
const products = require('../data/products');

// Teste para verificar se o array de produtos existe
function testProductsArray() {
  assert(Array.isArray(products), 'products deve ser um array');
  console.log('✅ Teste 1: Array de produtos existe');
  return true;
}

// Teste para verificar se os produtos têm a estrutura correta
function testProductStructure() {
  const allValid = products.every(product => {
    return (
      typeof product.id === 'number' &&
      typeof product.name === 'string' &&
      typeof product.quantity === 'number'
    );
  });
  
  assert(allValid, 'Todos os produtos devem ter id (number), name (string) e quantity (number)');
  console.log('✅ Teste 2: Estrutura dos produtos está correta');
  return true;
}

// Executa todos os testes
function runAllTests() {
  try {
    testProductsArray();
    testProductStructure();
    console.log('\n🎉 Todos os testes passaram com sucesso!');
    return { success: true, message: 'Todos os testes passaram!' };
  } catch (error) {
    console.error('\n❌ Falha nos testes:', error.message);
    return { success: false, message: error.message };
  }
}

// Se o arquivo for executado diretamente (não importado)
if (require.main === module) {
  runAllTests();
}

module.exports = { runAllTests, testProductsArray, testProductStructure };