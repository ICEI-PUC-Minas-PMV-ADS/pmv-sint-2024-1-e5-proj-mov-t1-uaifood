const express = require('express');
const app = express();
const PORT = 3000;

// dotenv
require('dotenv/config');
const api = process.env.API_URL;

// middleware
app.use(express.json());

app.get(`${api}/produtos`, (req, res) => {
  const product = {
    id: 1,
    name: 'tomate',
    image:'some_url'
  }
  res.send(product);
});

app.post(`${api}/produtos`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});