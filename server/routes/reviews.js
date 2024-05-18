// routes/reviews.js
const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// CRUD operations for Reviews
// Get all reviews for a product
router.get('/product/:productId', async (req, res) => {
  const reviews = await Review.find({ product_id: req.params.productId });
  res.json(reviews);
});

// Create review
router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.status(201).json(newReview);
});

// Update review
router.put('/:id', async (req, res) => {
  const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedReview);
});

// Delete review
router.delete('/:id', async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Review deleted' });
});

module.exports = router;

