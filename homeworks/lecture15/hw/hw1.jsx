import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/User';
import './styles-hw1.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/users'
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path='/users/:login'
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
