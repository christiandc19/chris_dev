import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import WebDesignPage from './routes/WebDesignPage'
import ContactPage from './routes/ContactPage'


import WixPage from './routes/WixPage';
import EcommercePage from './routes/EcommercePage';

import PortfolioPage from './routes/PortfolioPage'
import About from './routes/AboutPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/portfolio' element={<PortfolioPage />} />
      <Route exact path='/about-us' element={<About />} />

      <Route exact path='/web-design' element={<WebDesignPage />} />
      <Route exact path='/wix-professional-design' element={<WixPage />} />
      <Route exact path='/ecommerce' element={<EcommercePage />} />


      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
);

