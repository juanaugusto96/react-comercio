import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './contexts/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

  const handlePurchase = () => {
    alert('¡Compra realizada con éxito!');
    setCartItems([]);
  };

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} className="cart-image" />
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price} x {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <button className="purchase-button" onClick={handlePurchase}>Comprar</button>
        </div>
      )}
      <Link to="/" className="back-button">Volver al Menú Principal</Link>
    </div>
  );
}

export default CartPage;
