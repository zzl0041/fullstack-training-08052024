import { useState } from 'react';
import useFetch from './useFetch';

const URL = 'https://api.github.com/users/';
function DisplayUser({ id, avatar_url, username, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <td>{id}</td>
      <td>{username}</td>
      <td>
        <img src={avatar_url} alt='avatar' width='32' height='32' />
      </td>
    </tr>
  );
}

function DisplayUsersTable({ users, getUserDetail }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <DisplayUser
            key={user.id}
            id={index + 1}
            avatar_url={user.avatar_url}
            username={user.login}
            handleClick={() => getUserDetail(index)}
          />
        ))}
      </tbody>
    </table>
  );
}

function DisplayRepo({ repoName, repoDescription }) {
  return (
    <>
      <li className='repo-name'>{repoName}</li>
      <li>{repoDescription}</li>
    </>
  );
}

function DisplayReposList({ selectedUser }) {
  const {
    data: userRepos,
    loading: userReposLoading,
    error: userReposError,
  } = useFetch(`${URL}${selectedUser}/repos`);

  if (userReposLoading) return <p>Loading User Repo Info...</p>;
  if (userReposError) return <p>Error: {userReposError.message}</p>;
  // if (!userRepos || !Array.isArray(userRepos)) return <></>;
  return (
    <>
      <p>Repositories:</p>
      <ul>
        {userRepos.slice(0, 3).map((userRepo) => (
          <DisplayRepo
            key={userRepo.id}
            repoName={userRepo.name}
            repoDescription={userRepo.description}
          />
        ))}
      </ul>
    </>
  );
}

function DisplayUserInfoCard({ selectedUser }) {
  const {
    data: userInfo,
    loading: userInfoLoading,
    error: userInfoError,
  } = useFetch(`${URL}${selectedUser}`);

  if (userInfoLoading) return <p>Loading User Info...</p>;
  if (userInfoError) return <p>Error: {userInfoError.message}</p>;
  // if (!userInfo.id) return <></>;
  return (
    <div className='user-info-card'>
      <img src={userInfo.avatar_url} alt='avatar' width='64' height='64' />
      <div className='user-info'>
        <h3>{userInfo.name}</h3>
        <p>Location: {userInfo.location}</p>
        <DisplayReposList selectedUser={selectedUser} />
      </div>
    </div>
  );
}

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch('https://api.github.com/users');

  function getUserDetail(index) {
    setSelectedUser(users[index].login);
  }

  if (usersLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error: {usersError.message}</p>;

  return (
    <div className='container'>
      <DisplayUsersTable
        className='user-table'
        users={users}
        getUserDetail={getUserDetail}
      />

      {selectedUser && (
        <div className='user-info-wrapper '>
          <DisplayUserInfoCard selectedUser={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default App;
