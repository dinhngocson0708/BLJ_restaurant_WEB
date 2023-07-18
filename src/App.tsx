import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact/Contact';
import './App.css';
import Ourmenu from './OurMenu/Ourmenu';
import Detail from './OurMenu/Detail';
import PrivacyNotice from './Privacy Notice';
import ScrollUpButton from './ScollUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourmenu" element={<Ourmenu/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/privacy' element={<PrivacyNotice />} />
        <Route path="/scollUp" element={<ScrollUpButton />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
