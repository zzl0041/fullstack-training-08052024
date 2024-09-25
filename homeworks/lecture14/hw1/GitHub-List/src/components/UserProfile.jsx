import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Card, Spin } from 'antd';

// eslint-disable-next-line react/prop-types
const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);

      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(userResponse.data);

        const reposResponse = await axios.get(userResponse.data.repos_url);
        setRepos(reposResponse.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching user profile', error);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) return <Spin />;
  if (error) return <div>{error}</div>;
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
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
