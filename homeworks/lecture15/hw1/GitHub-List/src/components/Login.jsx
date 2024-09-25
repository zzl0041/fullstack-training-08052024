import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'username' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate(from, { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '16px', marginBottom: '10px' }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '300px', height: '35px', fontSize: '16px', padding: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '16px', marginBottom: '10px' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '300px', height: '35px', fontSize: '16px', padding: '5px' }}
            />
          </div>
          <button 
            type="submit" 
            style={{
              width: '100px', 
              height: '35px', 
              fontSize: '16px', 
              border: '1px solid black',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
