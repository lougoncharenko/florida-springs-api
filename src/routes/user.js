require('dotenv').config();
const bcrypt = require('bcrypt');
const express = require('express')
const router = express.Router();

//models
const User = require('../models/user');

const checkAuth = require('../middleware/checkAuth');

// SHOW all
router.get('/', checkAuth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('Unauthorized. Please login.');
    }
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    console.log(`Get users error: ${err}`);
    res.status(500).json({ error: err.message });
  }
});

// SHOW one
router.get('/:userId', checkAuth, async (req, res) => {
  try {
    if (!req.currentUser) {
      return res.status(401).send('Unauthorized. Please login.');
    }
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    res.json({ user });
  } catch (err) {
    console.log(`Get user error: ${err}`);
    res.status(404).json({ error: err.message });
  }
});

// UPDATE
router.put('/:userId', checkAuth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('Unauthorized. Please login.');
    }
    const { id } = req.params;
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(id, { email, password: hashedPassword }, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    res.json({ user });
  } catch (err) {
    console.log(`Update user error: ${err}`);
    res.status(404).json({ error: err.message });
  }
});

// DELETE
router.delete('/:userId', checkAuth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('Unauthorized. Please login.');
    }
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('User not found');
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.log(`Delete user error: ${err}`);
    res.status(404).
      json({ error: err.message });
  }
});

module.exports = router;

