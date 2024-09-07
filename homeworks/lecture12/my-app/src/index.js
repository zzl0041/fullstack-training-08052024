import React from 'react';
import ReactDOM from 'react-dom/client';
import HW1 from './hw1';
import HW2 from './hw2';
import HW3 from './hw3';
import HW4 from './hw4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HW1 />
    <br />
    <HW2 />
    <br />
    <HW3 />
    <br />
    <HW4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
