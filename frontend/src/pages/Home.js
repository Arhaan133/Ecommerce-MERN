import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {  // Also changed App to Home to match the file name
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;