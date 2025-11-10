import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterApp from './RegisterApp';
import './App.css'; 

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RegisterApp />
  </React.StrictMode>
);