import React from 'react';

/**
 
  @param {object} props 
  @param {number} props.cartCount 
 */
function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>React Store App🛍️</h1>
      <div>
        🛒Cart: <span className="cart-badge">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;