const express = require('express');

const CategoriesServices = require('./../services/categories.services');

const router = express.Router();
const service = new CategoriesServices();

router.get('/', (req, res) => {
  res.json([
    'categoria 1',
    'caegoria 2'
  ]);
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

module.exports = router;
