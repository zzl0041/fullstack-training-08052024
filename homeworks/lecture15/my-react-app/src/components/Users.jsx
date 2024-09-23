import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users', error);
      });
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
