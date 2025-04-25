const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all products
router.get('/', async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

// POST add product
router.post('/', async (req, res) => {
  const { name, price } = req.body;
  await pool.query("INSERT INTO products (name, price) VALUES ($1, $2)", [name, price]);
  res.json({ success: true });
});

module.exports = router;
