import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true'
  )
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  return (
    <Router>
      <Routes>
        {/* Redirect from "/" to home if logged in */}
        <Route
          path='/'
          element={
            isLoggedIn ? (
              <Home username={username} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/login'
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
        <Route
          path='/users'
          element={isLoggedIn ? <UserList /> : <Navigate to='/login' replace />}
        />
        <Route
          path='/users/:login'
          element={
            isLoggedIn ? <UserProfile /> : <Navigate to='/login' replace />
          }
        />
      </Routes>
    </Router>
  )
}

function Login({ setIsLoggedIn, setUsername }) {
  const [inputUsername, setInputUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputUsername === password) {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', inputUsername)
      setIsLoggedIn(true)
      setUsername(inputUsername)
      navigate('/') // Stay on the Home page after login
    } else {
      alert('Username and password must be the same.')
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

function Home({ username, setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className='home'>
      <h1>Home</h1>
      <p>Welcome {username}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className='user-list'>
      <h3>GitHub Users</h3>
      <table className='users-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <a href={`/users/${user.login}`}>{user.login}</a>
              </td>
              <td>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className='table-avatar'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function UserProfile() {
  const [selectedUser, setSelectedUser] = useState(null)
  const username = window.location.pathname.split('/').pop()

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))
  }, [username])

  return (
    <div className='user-profile'>
      {selectedUser ? (
        <div className='profile-card'>
          <img src={selectedUser.avatar_url} alt={selectedUser.login} />
          <h2>{selectedUser.name || selectedUser.login}</h2>
          <p>Location: {selectedUser.location || 'Not available'}</p>
          <h3>Repositories:</h3>
          <UserRepositories username={selectedUser.login} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

function UserRepositories({ username }) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data.slice(0, 5)))
  }, [username])

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
          <p>{repo.description || 'No description'}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
