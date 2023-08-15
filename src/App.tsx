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
// import ShopingCardInfo from './ShopingCartInfo';
//  import Showcart from './ShopingCartInfo/Showcart';
import ShopingCardInfo from './ShopingCartInfo';

import Signup from './Signup';
import Login from './Login';
import MyProfile from './Profile/My Profile';
import UpdateProfile from './Profile/Update Profile';
import Profile from './Profile/Account';
 
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

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id/:rand' element={<Detail />} />
          <Route path='/privacy' element={<PrivacyNotice />} />
          <Route path='/cart' element={<ShopingCardInfo />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/update_profile" element={<UpdateProfile/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

      )}
    </BrowserRouter>
  );
}

export default App;
