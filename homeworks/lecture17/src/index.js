import React from 'client/node_modules/@types/react';
import ReactDOM from 'client/node_modules/@types/react-dom/client';
import 'client/src/index.css';
import App from 'client/src/todoSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);