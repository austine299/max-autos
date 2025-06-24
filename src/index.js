import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartProvider } from './components/CartContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);