import { Avatar, Card } from 'antd';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

interface GitHubUserProfile {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  repos: Repo[];
}

const UserProfile: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  const [selectedUser, setSelectedUser] = useState<GitHubUserProfile | null>(
    null
  );

  useEffect(() => {
    if (login) {
      axios
        .get(`https://api.github.com/users/${login}`)
        .then((response) => {
          const user = response.data;
          axios.get(user.repos_url).then((reposResponse) => {
            setSelectedUser({
              avatar_url: user.avatar_url,
              login: user.login,
              name: user.name || user.login,
              location: user.location || 'Unknown location',
              repos: reposResponse.data.slice(0, 10).map((repo: Repo) => ({
                name: repo.name,
                html_url: repo.html_url,
                description: repo.description,
              })),
            });
          });
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, [login]);

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      style={{
        width: '650px',
        margin: '20px auto',
        padding: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Avatar
          src={selectedUser.avatar_url}
          size={130}
          style={{ marginRight: '20px' }}
        />
        <div style={{ flex: 1 }}>
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
            {selectedUser.name}
          </span>
          <p style={{ color: 'gray', marginBottom: '10px', fontSize: '14px' }}>
            Location: {selectedUser.location}
          </p>
          <p style={{ marginBottom: '8px', fontSize: '16px', color: 'gray' }}>
            Repositories:
          </p>
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              fontSize: '14px',
              marginTop: '0',
            }}
          >
            {selectedUser.repos.map((repo) => (
              <li key={repo.name} style={{ marginBottom: '5px' }}>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold' }}
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p style={{ color: 'gray', marginTop: '5px' }}>
                    {repo.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '16px' }}>
        <Link to='/users'>Back to users</Link>
      </div>
    </Card>
  );
};

export default UserProfile;
