import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MissionPage from './routes/MissionPage'
import ContactPage from './routes/ContactPage'


import EmploymentPage from './routes/EmploymentPage';
import TransitionalHousingPage from './routes/TransitionalHousingPage';

import OthersPage from './routes/OthersPage'
import About from './routes/AboutPage';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/employment' element={<EmploymentPage />} />
      <Route exact path='/transitional-housing' element={<TransitionalHousingPage />} />


      <Route exact path='/other-resources' element={<OthersPage />} />
      <Route exact path='/about-us' element={<About />} />

      <Route exact path='/our-mission' element={<MissionPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

