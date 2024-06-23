import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, price, onBuy }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <button className="buy-button" onClick={onBuy}>Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;
