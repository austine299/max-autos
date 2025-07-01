import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import { CartProvider } from './components/CartContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <CartProvider>
    <App />
  </CartProvider>
  </Router>
);