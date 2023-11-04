import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import WebDesignPage from './routes/WebDesignPage'
import ContactPage from './routes/ContactPage'


import EmploymentPage from './routes/EmploymentPage';
import TransitionalHousingPage from './routes/TransitionalHousingPage';

import PortfolioPage from './routes/PortfolioPage'
import About from './routes/AboutPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/employment' element={<EmploymentPage />} />
      <Route exact path='/transitional-housing' element={<TransitionalHousingPage />} />


      <Route exact path='/portfolio' element={<PortfolioPage />} />
      <Route exact path='/about-us' element={<About />} />

      <Route exact path='/web-design' element={<WebDesignPage />} />

      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
);

