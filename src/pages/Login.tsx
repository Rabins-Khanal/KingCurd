import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Login.css';

const Login:React.FC = () => {
  const [isLoginSuccessful, setLoginSuccessful] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    
    setTimeout(() => {
      setLoginSuccessful(true);
    }, 2000);
  };
    
  return (
    
    <div  className='login'>
      <Header/>
      <div className='blur-background'>
        <div className='content'>
         
          <form className='login-form'onSubmit={handleLogin}>
            <h2>Login</h2>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' />

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' />

            <button type='submit'>Login</button>
          </form>
         


          {isLoginSuccessful && (
            <div className='popup'>
              <p>Login successful!</p>
              <span className='close-popup' onClick={() => setLoginSuccessful(false)}>
                &#x2716; 
              </span>
            </div>
          )}



        </div>
      </div>


       


      <Footer/>
    </div>
  );
}

export default Login;


        