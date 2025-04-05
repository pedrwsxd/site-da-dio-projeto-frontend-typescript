import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
