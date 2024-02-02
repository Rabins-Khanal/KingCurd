// AdminLogin.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { doLogin } from '../../auth/authService';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/admin/AdminLogin.css';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ userName: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/authenticate', credentials);

      if (response.status === 200) {
        const { token, userId, role } = response.data;

        localStorage.setItem('userId', userId);

        doLogin(token);
        console.log('Role:', role);

        if (role && role.toLowerCase() === 'admin') {
          console.log('Admin login successful');
          navigate('/AdminDashboard');
        } else {
          setError('Invalid role for admin login');
        }
      }
      } catch (err) {
        setError('Invalid username and password');
      }
  };

  const handleForgotPassword = () => {
    window.alert('Redirecting to Forgot Password page');
  };

  return (
    <div className="login-container">
      <h2 className="user-login-header">Admin Login</h2>
      <form className="user-login-form" onSubmit={handleLogin}>
        <label htmlFor="userName" className="user-login-label">
          Username:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={credentials.userName}
          onChange={handleChange}
          required
          className="user-login-input"
        />

        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="user-login-input"
        />

        <button type="submit" className="user-login-button">
          Login
        </button>
      </form>

      <p className="user-login-forgot-password">
        <a href="#" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
