import React from 'react';
import './Profile.css';
import Join from './Join';

const Profile = () => {
  return (
    <div className='profile'>
      <h3>Create Profile</h3>
      <h5>Find your Life Partner, 100% verified profiles of Brides and Grooms.</h5>
      <div className='join-container'>
        <Join className='join-button' />
      </div>
    </div>
  );
};

export default Profile;

