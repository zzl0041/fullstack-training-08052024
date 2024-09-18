import React from 'react';
import { useState } from 'react';
import useFetch from './useFetch';
import UserDetailsCard from './userDetailsCard';
import './styles-hw1.css';

const URL = 'https://api.github.com/users';

function UserDisplay({ userId, username, avatar_url, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <td>{userId}</td>
      <td>{username}</td>
      <td>
        <img
          src={avatar_url}
          alt='avatar'
          width='32'
          heigh='32'
        />
      </td>
    </tr>
  );
}

function App() {
  const { data: users, loading, error } = useFetch(URL);
  const [selectedUser, setSelectedUser] = useState(null);

  function getUserDetail(idx) {
    setSelectedUser(users[idx].login);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='hw1'>
      <table>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Image</th>
        </tr>
        {Array.isArray(users) ? (
          users.map((user, index) => (
            <UserDisplay
              key={user.id}
              userId={index + 1}
              username={user.login}
              avatar_url={user.avatar_url}
              handleClick={() => {
                getUserDetail(index);
              }}
            />
          ))
        ) : (
          <code>{JSON.stringify(users, null, '/t')}</code>
        )}
      </table>

      {selectedUser && <UserDetailsCard user={selectedUser} />}
    </div>
  );
}

export default App;
