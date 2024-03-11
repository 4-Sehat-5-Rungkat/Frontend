import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import HomeProduct from './pages/HomeProduct';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<HomeProduct />} exact /> 
          <Route path="/add-product" element={<AddProduct />} /> 
          <Route path="/edit-product" element={<EditProduct />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
