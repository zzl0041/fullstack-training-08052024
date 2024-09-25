import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Card } from 'antd';
import { useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { login } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (login) {
      axios.get(`https://api.github.com/users/${login}`)
        .then(response => {
          setUserData(response.data);
          return axios.get(response.data.repos_url);
        })
        .then(response => {
          setRepos(response.data.slice(0, 3));
        })
        .catch(error => console.error('Error fetching user profile', error));
    }
  }, [login]);

  if (!userData) return <div>Select a user to see details</div>;

  return (
    <Card className="user-profile-card">
      <div className="user-profile-content">
        <Avatar
          src={userData.avatar_url}
          size={130}
          className="user-profile-avatar"
        />
        <div className="user-profile-details">
          <span className="user-profile-name">
            {userData.name || userData.login}
          </span>
          <p className="user-profile-location">
            Location: {userData.location || 'Unknown location'}
          </p>
          <p className="user-profile-repo-title">Repositories:</p>
          <ul className="user-profile-repo-list">
            {repos.map(repo => (
              <li key={repo.name} className="user-profile-repo-item">
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="user-profile-repo-link"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="user-profile-repo-description">
                    {repo.description}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <Link to="/users" style={{ marginTop: '20px', display: 'block', color: 'blue', textDecoration: 'underline' }}>
            Back to Users
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
