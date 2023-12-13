import React, { useState } from 'react';
import banner from '../images/banner.png'; 
import './style.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    question: '',
    answer: '',
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
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='register'>
     <form 
        onSubmit={handleSubmit}
        className="registration"
      >
        <div className='loginDetail'>
        <div className='registrationInput'>
        <div className='registrationAccess'>
            <div className='kingcurd'>Join KingCurd</div>
            <div>Register to embark on an unforgettable experience.</div>
            </div>
          <div className='registrationLabel'>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='registrationLabel'>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='registrationLabel'>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='registrationLabel'>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='registrationLabel'>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className='submit'>
          <button type="submit">Register</button>
        </div>
        </div>
        <img className='curdImg'
         src={banner}
          alt=''
           width="250" height="360" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
