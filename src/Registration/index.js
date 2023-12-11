import React, { useState } from 'react';
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
      <h2>Join KingCurd</h2>
      <h6>Register to embark on an unforgettable experience.</h6>
      <form 
        onSubmit={handleSubmit}
        className="registration"
      >
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </label>
        <div className='submit'>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
