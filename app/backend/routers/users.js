const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const userList = await User.find();

  if(!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.post('/', async (req, res)=>{
  const hashedPassword = await bcrypt.hash(req.body.passwordHash, 10);

  let user = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash: hashedPassword,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      street: req.body.street,
      apartment: req.body.apartment,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
  });
  user = await user.save();

  if(!user)
  return res.status(400).send('O usuário não pode ser criado!');

  res.send(user);
});


module.exports = router;