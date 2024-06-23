// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './nav';
import ProductList from './ProductList';
import CartPage from './CartPage';
import Sidebar from './SideBar';
import Carousel from './Carrousel'; // Importa el componente Carrusel
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = ['vinos', 'cervezas', 'whiskys', 'fernet'];

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    const categoryParam = query.get('category');
    setActiveCategory(categoryParam || '');
  }, [query, location]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app">
      <Navbar handleCategoryChange={handleCategoryChange} />
      <Carousel /> {/* Agrega el carrusel aquí */}
      <div className="container">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onChangeCategory={handleCategoryChange}
        />
        <div className="product-list">
          <Routes>
            <Route path="/" element={<ProductList selectedCategory={activeCategory} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
