import React from 'react';
import { useState } from 'react';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const URL = 'https://api.github.com/users';

function UserDisplay({ userId, username, avatar_url, handleClick }) {
  return (
    <tr>
      <td>{userId}</td>
      <td
        onClick={handleClick}
        className='username-link'
      >
        {username}
      </td>
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

export default function Users() {
  const { data: users, loading, error } = useFetch(URL);
  const navigate = useNavigate();

  function getUserDetail(idx) {
    navigate(users[idx].login);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
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
    </>
  );
}
