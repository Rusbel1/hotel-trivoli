import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './billing/components/productCard/cards';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div>
        <ProductCard />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
