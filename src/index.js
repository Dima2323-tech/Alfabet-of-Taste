import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import "./Style/style.scss";
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
window.addEventListener('load', AOS.refresh)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

