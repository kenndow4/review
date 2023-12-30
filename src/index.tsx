import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ContData }from './data/data';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContData>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContData>
  </React.StrictMode>
);


