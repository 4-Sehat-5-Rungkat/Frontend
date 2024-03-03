import React, { useState, useEffect } from 'react';
import 'App.css';

const SehatRungkat = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData().then((data) => {
      setProducts(data);
    });
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch('https://082e-123-253-233-115.ngrok-free.app/product'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      return [];
    }
  };

  return (
    <div className="sehat-rungkat">
      <header>
        {/* Logo */}
        <div className="logo">4 Sehat 5 Rungkat</div>
        {/* Navigation */}
        <nav className="header-nav">
          <ul>
            <li><a href="addproduct.html">Add Product</a></li>
            <li><a href="editproduct.html">Edit Product</a></li>
          </ul>
        </nav>
        {/* Chart Container */}
        <div className="chart-container">
          <button className="chart-btn">
            <span className="chart-text">Keranjang</span>
            <img className="chart-img" src="keranjang.png" alt="Keranjang" />
          </button>
        </div>
      </header>

      {/* Greetings */}
      <p className="greetings1">Welcome Sahabat Sehat</p>
      <p className="greetings2">Produk Unggulan Kami</p>

      {/* Category Navigation */}
      <nav className="category-nav">
        <ul>
          <li>Semua Produk</li>
          <li>Sepak Bola</li>
          <li>Basket</li>
          <li>Bulutangkis</li>
          <li>Tennis</li>
        </ul>
      </nav>

      {/* Product Cards */}
      <div className="product-cards-container" id="productContainer">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SehatRungkat;
