const { soma, saudacao } = require('../index');

test('soma de 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('saudação com nome deve retornar mensagem correta', () => {
  expect(saudacao('Maria')).toBe('Olá, Maria!');
});
