const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(morgan('tiny'));

// dotenv
require('dotenv/config');
const api = process.env.API_URL;

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

mongoose.connect(process.env.CONNECTION_STRING, {
  dbName: 'uaifood-database'
})
.then(() => {
  console.log('Database connection is ready');
})
.catch(err => {
  console.log(err);
})

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});