import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/fonts.css';
import './styles/main.css';

// Fix pour l'accès à l'admin Decap CMS en dev avec BrowserRouter
if (window.location.pathname.startsWith('/admin')) {
  if (!window.location.pathname.includes('index.html')) {
    window.location.href = '/admin/index.html';
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);