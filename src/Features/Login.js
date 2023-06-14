// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
const navigate = useNavigate();
const handleRegister = () => {
   navigate('/register')
}
const [formData, setFormData] = useState({
email: '',
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
// Retrieve user data from local storage
const userData = JSON.parse(localStorage.getItem('userData'));
// Check if email and password match the registered data
if (userData && formData.email === userData.email && formData.password === userData.password) {
navigate('/profile/create');
} 
else if (userData && formData.email === userData.email && formData.password !== userData.password) {
alert("Your Password is Wrong")
} 
else if (userData && formData.email !== userData.email && formData.password !== userData.password) {
alert("Please Enter Your Email Id and Password Correctly")
} 
else {
// Invalid credentials, show alert message
alert("Your Emaail ID is Wrong");
}
// Clear form data after submission
setFormData({
email: '',
password: '',
});
};
return (
<div className='loginpage'>
   <div className='login-container'>
      <div className='formsubmit'>
         <div className='heading'>
            <h3>Login</h3>
         </div>
         <form className='formcontainer' onSubmit={handleSubmit}>
            <div className='input-row'>
               <label htmlFor='email'>E-Mail</label>
               <input
                  type='text'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  />
            </div>
            <div className='input-row'>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  />
            </div>
            <div className='button'>
               <button type='submit'>
                  Login 
                  <FontAwesomeIcon icon={faRightToBracket} />
               </button>
               <br/><br/>
               <span className='span1'>Forgot Your Password?</span>
            </div>
         </form>
         <div className='exist'>
            <h2>
               Dont Have an Account?
               <span className='span1' onClick={handleRegister}>Register</span>
            </h2>
         </div>
      </div>
   </div>
</div>
);
};
export default Login;