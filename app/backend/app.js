const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');
const api = process.env.API_URL;

const productsRouter = require('./routers/products');

// middleware
app.use(express.json());
app.use(morgan('tiny'));

// routers
app.use(`${api}/produtos`, productsRouter);

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