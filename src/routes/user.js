const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();

//models
const User = require('../models/user');


  // SIGN UP FORM
router.get('/sign-up', (req, res) => 
  //return a value
  res.render('sign-up'));

  // SIGN UP POST ACTION
router.post('/sign-up', async (req, res) => {
    try {
      // Create User
      const user = await new User(req.body);
      await user.save();
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
 
      const token = await jwt.sign(
        { _id: user._id }, 
        process.env.SECRET, 
        { expiresIn: '60 days' });
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
      res.status(201).json({ message: 'User created successfully'});
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  });
  // LOGOUT
  router.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    return res.redirect('/');
  });
  // LOGIN FORM
  router.get('/login', (req, res) => res.render('login'));
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username }, 'username password');
      if (!user) {
        return res.status(401).send({ message: 'Wrong Username or Password' });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          return res.status(401).send({ message: 'Wrong Username or password' });
        }
        if (req.body.rememberMe) {
          const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
            expiresIn: '2 days',
          });
          res.cookie('nToken', token, { maxAge: 172800000, httpOnly: true });
        } else {
          const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET);
          res.cookie('nToken', token, { httpOnly: true }); //JWT token should expire when browser window is closed
        }
        return res.redirect('/');
      });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router
