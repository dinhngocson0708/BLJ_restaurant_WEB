import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home';
import Contact from '../src/Component/Contact/Contact';
import logo from './logo.svg';
import './App.css';
import Ourmenu from './Component/OurMenu/Ourmenu';
import Detail from './Component/OurMenu/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourmenu" element={<Ourmenu/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
