import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/githubUsers';
import DisplayUserInfoCard from './components/userInfoCard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/users'
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/:username'
          element={
            <ProtectedRoute>
              <DisplayUserInfoCard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLoutOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <h1>Home</h1>
      <nav>
        {user ? (
          <>
            <h1>Hello {user.name}</h1>
            <button onClick={handleLoutOut}>Log out</button>
          </>
        ) : (
          <Link to='login'> login </Link>
        )}
      </nav>
    </>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { id: 1, name: username };

    localStorage.setItem('user', JSON.stringify(user));

    navigate(from, { replace: true });
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
