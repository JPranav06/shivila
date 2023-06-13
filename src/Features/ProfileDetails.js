import React from 'react';
import Profilecreate from './Profilecreate';
import Horoscope from './Horoscope';
import Educationdetails from './Educationdetails';
import FamilyDetails from './FamilyDetails';
import Expectations from './Expectations'

import './ProfileDetails.css';

const ProfileDetails = () => {
  return (
    <div className='profiledetails'>
        
        <Profilecreate />
        <Horoscope/>
        <Educationdetails/>
        <FamilyDetails/>
        <Expectations/>


      </div>
  );
}

export default ProfileDetails;

