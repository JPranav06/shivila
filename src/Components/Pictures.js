import React, { useEffect, useState } from 'react';
import Pic1 from '../Assets/Pic1.jpg';
import Pic2 from '../Assets/Pic2.jpg';
import Profile from './Profile';
import './Pictures.css';

const Pictures = () => {
  const [showPic1, setShowPic1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPic1((prevValue) => !prevValue);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='picture-container'>
      <div className={`background-image ${showPic1 ? 'fade-in' : 'fade-out'}`} style={{ backgroundImage: `url(${Pic1})` }} />
      <div className={`background-image ${showPic1 ? 'fade-out' : 'fade-in'}`} style={{ backgroundImage: `url(${Pic2})` }} />
      <div className='profile-container'>
        <Profile />
      </div>
    </div>
  );
};

export default Pictures;


