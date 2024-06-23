import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ categories, activeCategory, onChangeCategory }) => {
  return (
    <div className="sidebar">
      <h3>Categorías</h3>
      <ul className="category-list">
        <li>
          <Link
            to="/"
            className={!activeCategory ? 'active' : ''}
            onClick={() => onChangeCategory('')}
          >
            Todas las Categorías
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/?category=${category}`}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => onChangeCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
