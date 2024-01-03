import React, { useState } from 'react';
import { FaUserLock } from 'react-icons/fa';
import '/Users/puja/Movies/Software Dev/src/assets/css/admin/AdminLogin.css';

const AdminLogin:React.FC = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };



  return (
    <div className="admin-login-page">
        <div className="body-container">
    <div className="admin-login-container">
      <div className="admin-icon">
        <FaUserLock />
      </div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="admin-form-group">
          <label className="label-default" htmlFor="username">Username:</label>
          <input
            className="input-default"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="admin-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="button-primary" type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default AdminLogin;
