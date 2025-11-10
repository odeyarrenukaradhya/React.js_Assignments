import React from 'react';
import ProductItem from './ProductItem';

/**
 * @param {object} props 
 * @param {Array<object>} props.products 
 * @param {function} props.addToCart .
 */
function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;