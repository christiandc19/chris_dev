import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


import WebDesignPage from './routes/WebDesignPage'
import WixPage from './routes/WixPage';
import EcommercePage from './routes/EcommercePage';
import GraphicDesignPage from './routes/GraphicDesignPage';
import SEOPage from './routes/SEOPage';

import PortfolioPage from './routes/PortfolioPage'
import About from './routes/AboutPage';
import ContactPage from './routes/ContactPage'

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
      <Route exact path='/graphic-design' element={<GraphicDesignPage />} />
      <Route exact path='/search-engine-optimization' element={<SEOPage />} />


      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
);

