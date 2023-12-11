import React, { useState } from 'react';
import banner from '../images/banner.png'; 
import './style.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API request
    console.log('Login Sucessfully', formData);
  };

  return (
    <div className='login'>
      <form 
        onSubmit={handleSubmit}
        className="loginform"
      >
        <div className='loginDetail'>
          <div className='loginInput'>
            <div className='loginAccess'>
            <div>Login to</div>
            <div>continue access</div>
            </div>
          <div className='input'>
          <label>
            <input
              type="text"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          </div>
          <div className='submitButton'>
          <button type="submit">Log In</button>
          </div>
          </div>
        <img src={banner} alt='' width="250" height="300" /> 
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
