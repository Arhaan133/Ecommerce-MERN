import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="product-card">
      <img 
        src={product.image}
        alt={product.name}
        className="product-image"
        crossOrigin="anonymous"
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button 
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;