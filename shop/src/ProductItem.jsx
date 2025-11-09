import React, { useState } from 'react';
import Card from './Card'; 
import './App.css'; 

function ProductItem({ product, addToCart }) {
  const SPECIAL_PRICE_THRESHOLD = 300; 
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleCartClick = () => {
    addToCart(product.id);
    setShowConfirmation(true);
    
    const timer = setTimeout(() => {
      setShowConfirmation(false);
    }, 1500);
    return () => clearTimeout(timer);
  };

  const cardClass = product.available ? '' : 'out-of-stock-card';

  return (
    <Card className={cardClass}>
      <div style={{ marginBottom: '15px' }}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
        />
      </div>
      <h3>{product.name}</h3>
      <p>
        <strong style={{ color: product.available ? 'green' : 'gray' }}>
          ₹{product.price.toFixed(2)}
        </strong>
      </p>
      {product.price > SPECIAL_PRICE_THRESHOLD && (
        <p style={{ color: '#ff8c00', fontWeight: 'bold' }}>
          ✨ Special Offer Available!
        </p>
      )}

      {showConfirmation ? (
       
        <span style={{ color: '#4CAF50', fontWeight: 'bold', marginTop: '10px' }}>
          ✅ Item Added to Cart!
        </span>
      ) : product.available ? (
     
        <button
          className="add-to-cart-btn"
          onClick={handleCartClick} 
        >
          Add to Cart
        </button>
      ) : (
        <span className="out-of-stock-label">
          Out of Stock 😟
        </span>
      )}
    </Card>
  );
}

export default ProductItem;