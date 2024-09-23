import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { login } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });

    axios.get(`https://api.github.com/users/${login}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repos', error);
      });
  }, [login]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.name || userData.login}</h2>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="150" />
      <p>Username: {userData.login}</p>

      <h3>Repositories</h3>
      <ul>
        {repos.slice(0, 5).map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
