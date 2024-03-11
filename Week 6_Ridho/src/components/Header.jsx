import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header>
      <div className="logo">4 Sehat 5 Rungkat</div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">HomeProduct</Link></li> 
          <li><Link to="/add-product">Add Product</Link></li> 
          <li><Link to="/edit-product">Edit Product</Link></li> 
        </ul>
      </nav>
      <div className="chart-container">
        <button className="chart-btn">
          <span className="chart-text">Keranjang</span>
          <img className="chart-img" src="../assets/keranjang.png" alt="Keranjang Icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
