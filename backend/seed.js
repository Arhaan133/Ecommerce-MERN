const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');

const products = [
  {
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    stock: 50,
    rating: 4.5
  },
  {
    name: "Smart Watch Pro",
    description: "Feature-rich smartwatch",
    price: 4999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    stock: 30,
    rating: 4.7
  },
  {
    name: "Leather Backpack",
    description: "Stylish leather backpack",
    price: 1999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 25,
    rating: 4.3
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✓ Products seeded successfully');
  process.exit(0);
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
