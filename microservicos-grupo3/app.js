const express = require('express');
const app = express();
const productsRoute = require('./routes/productsRoutes');

app.use('/products', productsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Microserviço rodando em http://localhost:${PORT}`);
});