const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/check', (req, res) => {
  const productId = parseInt(req.query.productId);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json({ available: product.available });
  } else {
    res.status(404).json({ message: "Produto não encontrado", available: false });
  }
});

module.exports = router;