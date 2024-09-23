import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home</h1>
      {user ? (
        <>
          <h2>Welcome {user.username}</h2>
          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            Log out
          </button>
        </>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            marginTop: '20px',
            padding: '8px 10px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
