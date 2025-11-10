import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import './App.css'; 

const initialProducts = [
  { id: 101, name: 'Wireless Mouse', price: 450.99, available: true, imageUrl: 'https://www.redragon.in/cdn/shop/files/Main_d733c563-7c27-4ed4-a778-c8860fdb26a5.png?v=1748945785&width=2048' },
  { id: 102, name: 'Mechanical Keyboard', price: 599.00, available: true, imageUrl: 'https://zebronics.com/cdn/shop/products/ZEB-MAX-NINJA-200-pic1.jpg?v=1679031998&width=2048' },
  { id: 103, name: '4K Monitor', price: 8500.00, available: false, imageUrl: 'https://poojaelectronics.in/storage/2023/02/BenQ-EW2880U-28-inch-4K-UHD-HDRi-IPS-Entertainment-Monitor-Online-Buy-Mumbai-India_2.jpg' },
  { id: 104, name: 'USB-C Hub', price: 150.75, available: true, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvNThmM6Gc8llC9wUwhN0gDubPCQZaJJ19Q&s' },
  { id: 105, name: 'Laptop Stand', price: 450.00, available: false, imageUrl: 'https://oboeshop.in/cdn/shop/products/61-_0W3MZgL._SL1500.jpg?v=1693830533' },
];

function StoreApp() {
  const [products] = useState(initialProducts);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productId) => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <hr />
      <ProductList 
        products={products}
        addToCart={handleAddToCart}
      />
    </div>
  );
}

export default StoreApp;