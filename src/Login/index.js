  import React, { useState } from 'react';
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
      <h2>Login Form</h2>
      <form 
        onSubmit={handleSubmit}
        className="loginform"
      >
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className='submit'>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
