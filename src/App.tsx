import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home';
import Contact from '../src/Component/Contact/Contact';
import './App.css';
import PrivacyNotice from './Component/Privacy Notice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<PrivacyNotice />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
