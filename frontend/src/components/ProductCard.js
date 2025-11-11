import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
    e.target.onerror = null;
    // Try fallback to jpg if svg fails
    if (e.target.src.endsWith('.svg')) {
      e.target.src = e.target.src.replace('.svg', '.jpg');
    } else {
      e.target.src = '/images/placeholder.svg';
    }
  };

  // Default product image if none provided
  const getImageUrl = () => {
    if (!product.image) return '/images/placeholder.svg';
    return imageError ? '/images/placeholder.svg' : product.image;
  };

  return (
    <div className="product-card">
      <img
        src={getImageUrl()}
        alt={product.name}
        className="product-image"
        onError={handleImageError}
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px'
        }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button 
        className="add-to-cart-btn" 
        onClick={handleAddToCart} 
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;