import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const URL = "https://api.github.com/users/";

function DisplayRepo({ repoName, repoDescription }) {
  return (
    <>
      <li className="repo-name">{repoName}</li>
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
        {userRepos.slice(0, 8).map((userRepo) => (
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

function DisplayUserInfoCard() {
  const { username } = useParams();

  const {
    data: userInfo,
    loading: userInfoLoading,
    error: userInfoError,
  } = useFetch(`${URL}${username}`);

  if (userInfoLoading) return <p>Loading User Info...</p>;
  if (userInfoError) return <p>Error: {userInfoError.message}</p>;
  // if (!userInfo.id) return <></>;
  return (
    <div className="user-info-card">
      <img src={userInfo.avatar_url} alt="avatar" width="64" height="64" />
      <div className="user-info">
        <h3>{userInfo.name}</h3>
        <p>Location: {userInfo.location}</p>
        <DisplayReposList selectedUser={username} />
      </div>
      <Link to="/users"> Back to Users </Link>
    </div>
  );
}

export default DisplayUserInfoCard;
