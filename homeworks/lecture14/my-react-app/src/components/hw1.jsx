import React, { useState, useEffect } from 'react';
import './hw1.css';

const GitHubList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  // Fetch the list of users
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Fetch user profile and repositories when a user is clicked
  const handleUserClick = (user) => {
    setSelectedUser(user);

    fetch(user.repos_url)
      .then((response) => response.json())
      .then((repos) => setUserRepos(repos))
      .catch((error) => console.error('Error fetching repos:', error));
  };

  return (
    <div className="github-list-container">
      {/* Users list */}
      <div className="user-list">
        <h2>GitHub Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              <img src={user.avatar_url} alt={user.login} />
              <span>{user.login}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* User profile */}
      {selectedUser && (
        <div className="user-profile">
          <h2>User Profile</h2>
          <img src={selectedUser.avatar_url} alt={selectedUser.login} className="profile-avatar" />
          <p><strong>Username:</strong> {selectedUser.login}</p>
          <p><strong>GitHub Profile:</strong> <a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">{selectedUser.html_url}</a></p>

          {/* Display user repositories */}
          <h3>Repositories:</h3>
          <ul>
            {userRepos.slice(0, 5).map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitHubList;
