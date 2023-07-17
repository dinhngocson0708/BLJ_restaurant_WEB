import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home';
import Contact from '../src/Component/Contact/Contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
