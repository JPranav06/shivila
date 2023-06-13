import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Features/Login';
import Home from './Components/Home';
import ProfileDetails from './Features/ProfileDetails';
import Register from './Features/Register';
import Bride from './Section/Bride';
import Groom from './Section/Groom';
import Details from './Features/Details';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/shivila' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile/create' element={<ProfileDetails/>}/>
      <Route path='/profile/create/{profileName}' element={<ProfileDetails/>}/>
      <Route path='/find/Female' element={<Bride/>}/>
      <Route path='/find/Male' element={<Groom/>}/>
      <Route path='/details' element={<Details/>}/>
      </Routes>
    </Router>
  );
};

export default App;



