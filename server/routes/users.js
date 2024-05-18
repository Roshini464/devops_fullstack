// routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// CRUD operations for User profiles
// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update user
router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// Delete user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'User deleted' });
});

module.exports = router;

