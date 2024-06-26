const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res) =>{
  const userList = await User.find().select('-passwordHash');

  if(!userList) {
      res.status(500).json({success: false})
  } 
  res.send(userList);
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');

  if(!user) {
    res.status(500).json({ message: 'O usuário não foi encontrado!' });
  }
  res.send(user);
});

router.post('/', async (req, res) =>{

  let user = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
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

router.put('/:id',async (req, res) => {

  const userExist = await User.findById(req.params.id);
  let newPassword
  if(req.body.password) {
      newPassword = bcrypt.hashSync(req.body.password, 10)
  } else {
      newPassword = userExist.passwordHash;
  }

  const user = await User.findByIdAndUpdate(
      req.params.id,
      {
          name: req.body.name,
          email: req.body.email,
          passwordHash: newPassword,
          phone: req.body.phone,
          isAdmin: req.body.isAdmin,
          street: req.body.street,
          apartment: req.body.apartment,
          zip: req.body.zip,
          city: req.body.city,
          country: req.body.country,
      },
      { new: true}
  );

  if(!user)
  return res.status(400).send('O usuário não pode ser criado!')

  res.send(user);
})

router.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  const secret = process.env.secret;

  if(!user) {
    return res.status(400).send('Usuário não encontrado!')
  }

  if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin
      },
      secret,
      {expiresIn: '1d'}
    );

    res.status(200).send({user: user.email, token: token});
  } else {
    res.status(400).send('Senha incorreta!')
  }
});

router.post('/cadastro', async (req,res)=>{
  let user = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      street: req.body.street,
      apartment: req.body.apartment,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
  })
  user = await user.save();

  if(!user)
  return res.status(400).send('O usuário não pode ser criado!')

  res.send(user);
})

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(user =>{
      if(user) {
          return res.status(200).json({success: true, message: 'Usuário deletedado!'})
      } else {
          return res.status(404).json({success: false , message: "Usuário não encontrado!"})
      }
  }).catch(err => {
     return res.status(500).json({success: false, error: err}) 
  })
})

router.get(`/get/total`, async (req, res) =>{
  let userCount = await User.countDocuments();

  if(!userCount) {
      res.status(500).json({success: false})
  } 
  res.send({
      userCount: userCount
  });
})

module.exports = router;