const express = require('express');
const app = express();
const port = 3000;

// Dados em memória (mock)
const inventory = {
  101: { name: 'MacBook Pro M2', quantity: 5 },
  102: { name: 'iPhone 15 Pro', quantity: 0 },
  103: { name: 'Apple Watch Ultra', quantity: 2 }
};

app.use(express.static('public'));

app.get('/inventory/check', (req, res) => {
  const productId = req.query.productId;
  const product = inventory[productId];

  if (!product) {
    return res.json({ error: 'Produto não encontrado.' });
  }

  res.json({
    name: product.name,
    quantity: product.quantity,
    inStock: product.quantity > 0
  });
});

app.listen(port, () => {
  console.log(`Microserviço rodando em http://localhost:${port}`);
});
