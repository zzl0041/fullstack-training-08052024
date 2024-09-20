import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(userName, password) {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }

    localStorage.setItem(
      'user',
      JSON.stringify({ id: 1, name: userName, pw: password })
    );

    navigate(-1);
  }

  return (
    <>
      <h1>Login</h1>
      <div className='input-field'>
        <label htmlFor=''>Username</label>
        <input
          type='text'
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className='input-field'>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => handleSubmit(user, password)}>Submit</button>
    </>
  );
}
