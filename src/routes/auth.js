require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express')
const router = express.Router();

//models
const User = require('../models/user');


// SIGNUP
router.post('/sign-up', async (req, res) => {
  try {
    // Create User
    const user = new User(req.body);
    await user.save();
    // Create JWT token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
    // Set cookie
    res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
    res.redirect('/');
    res.status(201).json({ message: 'User created successfully'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find this user email
    const user = await User.findOne({ email }, 'email password');
    if (!user) {
      // User not found
      return res.status(401).send({ message: 'Wrong email or Password' });
    }
    // Check the password
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        // Password does not match
        return res.status(401).send({ message: 'Wrong email or password' });
      }
      // Create a token
      const token = jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET, {
        expiresIn: '60 days',
      });
      // Set a cookie and redirect to root
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
      res.redirect(`/users/${user._id}`);
    });
  } catch (err) {
    console.log(err);
  };
});

// LOGOUT
router.get('/logout', (req, res) => {
  res.clearCookie('nToken');
  res.redirect('/');
});

module.exports = router;

