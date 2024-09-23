import { Avatar, Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface GitHubUser {
  login: string;
  avatar_url: string;
  id: number;
}

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

const App: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<GitHubUserProfile | null>(
    null
  );

  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const fetchUserProfile = (username: string) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        const user = response.data;
        axios.get(user.repos_url).then((reposResponse) => {
          setSelectedUser({
            avatar_url: user.avatar_url,
            login: user.login,
            name: user.name || user.login,
            location: user.location || 'Unknown location',
            repos: reposResponse.data.slice(0, 3).map((repo: Repo) => ({
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
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Username',
      dataIndex: 'login',
      key: 'login',
      width: '45%',
    },
    {
      title: 'Image',
      dataIndex: 'avatar_url',
      key: 'avatar_url',
      render: (text: string) => <Avatar src={text} shape='square' size={64} />,
      width: '45%',
    },
  ];

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <Table
        columns={columns}
        dataSource={users}
        pagination={false}
        onRow={(user) => {
          return {
            onClick: () => fetchUserProfile(user.login),
          };
        }}
        style={{
          cursor: 'pointer',
          width: '20%',
          marginRight: '20px',
        }}
      />

      {selectedUser && (
        <Card
          style={{
            width: '650px',
            height: 'fit-content',
            padding: '15px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            position:'absolute',
            top: '20%',
            left: '30%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* Avatar on the left */}
            <Avatar
              src={selectedUser.avatar_url}
              size={130}
              style={{ marginRight: '20px' }}
            />

            {/* Content on the right */}
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                {selectedUser.name}
              </span>
              <p
                style={{
                  color: 'gray',
                  marginBottom: '10px',
                  fontSize: '14px',
                }}
              >
                Location: {selectedUser.location}
              </p>

              <p
                style={{ marginBottom: '8px', fontSize: '16px', color: 'gray' }}
              >
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
        </Card>
      )}
    </div>
  );
};

export default App;
