import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <h2>Welcome {user.username}</h2>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <a onClick={handleLogin} style={{ cursor: 'pointer' }}>Login</a>
      )}
    </div>
  );
};

export default Home;
