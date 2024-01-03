import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Signup.css';



const Signup:React.FC = () => {
  const [registered, setRegistered] = useState(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setRegistered(true);
  };
  return (
    <div>
      <Header/>
     
      <div className="glass-signup-section">
        <div className="glass-signup-content">
          {registered ? (
            <div className="success-message">
              <h2>Registration Successful!</h2>
              <p>Welcome to our community!</p>
            </div>
          ) : (
            
            <form className="signup-form" onSubmit={handleSignup}>
              <h2>Sign Up</h2>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="column">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" />
                </div>
                <div className="column">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
                </div>
                <div className="column">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
      <Footer/>
      
      </div>
  )
}

export default Signup;