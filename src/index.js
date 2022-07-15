import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';

import { CartContextProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);

