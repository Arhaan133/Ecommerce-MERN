import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1><Link to="/">E-commerce App</Link></h1>
      <nav>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
