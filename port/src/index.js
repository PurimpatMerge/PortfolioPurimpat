import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
