import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  const fetchUserProfile = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))
  }

  return (
    <div className='container'>
      <div className='user-list'>
        <h3>GitHub Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => fetchUserProfile(user.login)}>
              <img src={user.avatar_url} alt={user.login} className='avatar' />
              <span>{user.login}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='user-profile'>
        {selectedUser ? (
          <div className='profile-card'>
            <img
              src={selectedUser.avatar_url}
              alt={selectedUser.login}
              className='profile-avatar'
            />
            <div className='profile-details'>
              <h2>{selectedUser.name || selectedUser.login}</h2>
              <p>Location: {selectedUser.location || 'Not available'}</p>
              <h3>Repositories:</h3>
              <ul className='repos-list'>
                <UserRepositories username={selectedUser.login} />
              </ul>
            </div>
          </div>
        ) : (
          <p>Please select a user to view their profile.</p>
        )}
      </div>
    </div>
  )
}

function UserRepositories({ username }) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data.slice(0, 5))) //
    }
  }, [username])

  return (
    <>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
          <p>{repo.description || 'No description'}</p>
        </li>
      ))}
    </>
  )
}

export default App
