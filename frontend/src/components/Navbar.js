import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🛍️ ShopHub</Link>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-btn">Home</Link>
        {isAuthenticated ? (
          <>
            <span className="user-name">Hi, {user?.name}</span>
            <button onClick={handleLogout} className="nav-btn logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/register" className="nav-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
