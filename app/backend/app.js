const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routes
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');

const api = process.env.API_URL;

app.use(`${api}/categorias`, categoriesRoutes);
app.use(`${api}/produtos`, productsRoutes);
app.use(`${api}/usuarios`, usersRoutes);
app.use(`${api}/pedidos`, ordersRoutes);

// Database
mongoose.connect(process.env.CONNECTION_STRING, {
  dbName: 'uaifood-database'
})
.then(() => {
  console.log('Database connection is ready');
})
.catch(err => {
  console.log(err);
})

// Server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});