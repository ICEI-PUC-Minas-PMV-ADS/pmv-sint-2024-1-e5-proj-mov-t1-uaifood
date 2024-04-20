const { Product } = require('../models/product');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');

router.get(`/`, async (req, res) => {
  const productList = await Product.find().select('name image').populate('category');

  if(!productList) {
    res.status(500).json({success: false});
  }
  res.send(productList);
});

router.get(`/:id`, async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');

  if(!product) {
    res.status(500).json({success: false});
  }
  res.send(product);
});

router.post(`/`, async (req, res) => {
  const category = await Category.findById(req.body.category);
  if(!category) return res.status(400).send('Categoria inválida!');

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews, 
    isFeatured: req.body.isFeatured,
  });

  product = await product.save();

  if(!product)
  return res.status(500).send('O produto não pode ser criado');

  res.send(product);
});

router.put('/:id', async (req, res) => {
  if(!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('O ID do produto é inválido!');
  }
  const category = await Category.findById(req.body.category);
  if(!category) return res.status(400).send('Categoria inválida!');

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews, 
      isFeatured: req.body.isFeatured,
    },
    {new: true}
  );

  if(!product)
  return res.status(500).send('O produto não pode ser atualizado!');

  res.send(product);
});

router.delete('/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id).then(product => {
    if(product) {
      return res.status(200).json({ success: true, message: 'O produto foi excluido!'});
    } else {
      return res.status(404).json({ success: false, message: 'Produto não encontrado!'});
    }
  }).catch( err => {
    return res.status(400).json({ success: false, error: err});
  });
});

router.get(`/get/estatistica`, async (req, res) => {
  const productCount = await Product.countDocuments();

  if (!productCount) {
      res.status(500).json({ success: false });
  }
  res.send({
      productCount: productCount,
  });
});

router.get(`/get/destaque/:count`, async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const products = await Product.find({ isFeatured: true }).limit(+count);

  if (!products) {
      res.status(500).json({ success: false });
  }
  res.send(products);
});

router.get(`/get/destaque`, async (req, res) => {
  const products = await Product.find({ isFeatured: true });

  if (!products) {
      res.status(500).json({ success: false });
  }
  res.send(products);
});

module.exports = router;