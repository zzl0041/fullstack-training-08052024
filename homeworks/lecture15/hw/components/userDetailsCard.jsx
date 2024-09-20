import React from 'react';
import useFetch from './useFetch';

const baseUrl = 'https://api.github.com/users';

function UserName({ name }) {
  return <h4 className='user-name'>{name}</h4>;
}

function UserProfile({ avatar_url }) {
  return (
    avatar_url && (
      <img
        className='profile-img'
        src={avatar_url}
        alt='avatar'
      />
    )
  );
}

function UserLocation({ location }) {
  return <p>Location: {location} </p>;
}

function UserRepos({ user }) {
  const {
    data: userRepos,
    loading,
    error,
  } = useFetch(`${baseUrl}/${user}/repos`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Repositories</p>
      {userRepos.slice(0, 3).map((repo) => (
        <ul key={repo.id}>
          <li className='repo-name'>{repo.name}</li>
          {repo.description && <li>{repo.description}</li>}
        </ul>
      ))}
    </>
  );
}

function UserDetailsCard({ user }) {
  const { data: userInfo, loading, error } = useFetch(`${baseUrl}/${user}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { avatar_url = null, location = null, name = null } = userInfo;

  return (
    <div className='user-detail-card'>
      <UserProfile avatar_url={avatar_url} />
      <div className='user-details'>
        <UserName name={name} />
        <UserLocation location={location} />
        <UserRepos user={user} />
      </div>
    </div>
  );
}

export default UserDetailsCard;
