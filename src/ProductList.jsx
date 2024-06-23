// ProductList.jsx (Ejemplo simplificado)
import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartContext from './contexts/CartContext';
import './ProductList.css'

function ProductList({ selectedCategory }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error));
  }, []);

  const handleBuy = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          onBuy={() => handleBuy(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
