import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // HARDCODED DEMO CREDENTIALS
    // You will replace this with a real fetch() to your Express backend later!
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Removes the shake animation class after 0.5s
    }
  };

  return (
    <div className="login-container">
      <div className={`login-box ${error ? 'shake' : ''}`}>
        <button className="back-btn" onClick={onCancel}>&larr; Back to Site</button>
        
        <div className="login-header">
          <h2>Authorized <span className="accent">Personnel</span></h2>
          <p>Please enter your credentials to access the portal.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter admin"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter startup2026"
              required
            />
          </div>

          {error && <p className="error-text">Invalid credentials. Access denied.</p>}

          <button type="submit" className="login-submit-btn">Authenticate</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;