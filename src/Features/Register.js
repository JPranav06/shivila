// Register.js
import React, { useState } from 'react';
import Header from '../Components/Header';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    confirmemail: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.confirmPassword !== formData.password) {
      alert('Password does not match');
      return;
    } else {
      // Retrieve existing user data from local storage
      const existingUserData = localStorage.getItem('userData');
      if (existingUserData) {
        const existingUser = JSON.parse(existingUserData);
        if (existingUser.email === formData.email) {
          // Already a user, display alert message
          alert('You are already a user');
          return;
        }
      }
  
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
  
      // Clear form data after submission
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        confirmemail: '',
        password: '',
        confirmPassword: '',
      });
  
      alert('Registered Successfully');
      navigate('/login');
    }
  };  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='Registerpage'>
      <Header />
      <div className='Register-container'>
        <div className='formsubmit'>
          <div className='heading'>
            <h3>Register</h3>
          </div>
          <form className='formcontainer' onSubmit={handleSubmit}>
            <div className='input-row'>
              <label htmlFor='firstname'>First Name</label><br/><br/>
              <input
                type='text'
                id='firstname'
                name='firstname'
                required
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className='input-row'>
              <label htmlFor='lastname'>Last Name</label><br/><br/>
              <input
                type='text'
                id='lastname'
                name='lastname'
                required
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className='input-row'>
              <label htmlFor='email'>E-Mail</label><br/><br/>
              <input
                type='text'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='input-row'>
              <label htmlFor='confirmemail'>Confirm E-Mail</label><br/><br/>
              <input
                type='text'
                id='confirmemail'
                name='confirmemail'
                required
                value={formData.confirmemail}
                onChange={handleChange}
              />
            </div>
            <div className='input-row'>
              <label htmlFor='password'>Password</label><br/><br/>
              <input
                type='password'
                id='password'
                name='password'
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='input-row'>
  <label htmlFor='confirmPassword'>Confirm Password</label><br/><br/>
  <input
    type='password'
    id='confirmPassword'
    name='confirmPassword'
    required
    value={formData.confirmPassword}
    onChange={handleChange}
  />
</div>

            <div className='button'>
              <button type='submit'>Verify Email Address</button>
              <br />
              <br />
              <br />
              <div className='button'>
                <button type='button' onClick={handleLogin}>
                  Login <FontAwesomeIcon icon={faRightToBracket} />
                </button>
              </div>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Register;
