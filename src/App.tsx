import { useState, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact/Contact';
import './App.css';
import Ourmenu from './OurMenu/Ourmenu';
import Detail from './OurMenu/Detail';
import PrivacyNotice from './Privacy Notice';
import Loading from './Component/Loading/Loading';
import Gallery from './Gallery/Gallery';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/ourmenu"

            element={<Ourmenu />}
          />

          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/privacy' element={<PrivacyNotice />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
