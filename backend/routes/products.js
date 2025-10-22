import express from 'express';
const router = express.Router();

// Dummy products
const products = [
  { _id: '1', name: 'Product 1', price: 100, image: '/images/product1.jpg' },
  { _id: '2', name: 'Product 2', price: 200, image: '/images/product2.jpg' },
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
});

export default router;
