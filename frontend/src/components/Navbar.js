import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate('/')}>Shop</div>
      <div className="nav-items">
        <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="cart-btn" onClick={() => navigate('/cart')}>
          Cart ({cartItems.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;