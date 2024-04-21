const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  const userList = await User.find().select('-passwordHash');

  if(!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');

  if(!user) {
    res.status(500).json({ message: 'O usuário não foi encontrada!' });
  }
  res.send(user);
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

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email});
  const secret = process.env.secret;

  if(!user) {
    return res.status(400).send('Usuário não encontrado!')
  }

  if(user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id
      },
      secret,
      {expiresIn: '1d'}
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send('Senha incorreta!')
  }
});


module.exports = router;