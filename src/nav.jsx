import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from './contexts/CartContext';
import './Navbar.css'; // Puedes ajustar los estilos según sea necesario
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = ({ handleCategoryChange }) => {
  const { cartItems } = useContext(CartContext);

  // Calcula la cantidad total de productos en el carrito
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Mi Tienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link " aria-current="page">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menú
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/contacto" className="dropdown-item">Contacto</Link></li>
                <li><Link to="/preguntas-frecuentes" className="dropdown-item">Preguntas Frecuentes</Link></li>
                <li><Link to="/promociones" className="dropdown-item">Promociones</Link></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
