import React from 'react';
import Profilecreate from './Profilecreate';
import Horoscope from './Horoscope';
import Educationdetails from './Educationdetails';
import FamilyDetails from './FamilyDetails';
import Expectationss from './Expectationss';
import './ProfileDetails.css';

const ProfileDetails = () => {
  return (
    <div className='profiledetails'>
        <Profilecreate />
        <Horoscope/>
        <Educationdetails/>
        <FamilyDetails/>
        <Expectationss/>
      </div>
  );
}

export default ProfileDetails;

