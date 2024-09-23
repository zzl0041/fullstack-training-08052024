import '../App.css';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

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

const Users = () => {
  // const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch('https://api.github.com/users');

  function getUserDetail(index) {
    // setSelectedUser(users[index].login);
    navigate(`/user/${users[index].login}`);
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

      {/* {selectedUser && (
        <div className="user-info-wrapper ">
          <DisplayUserInfoCard selectedUser={selectedUser} />
        </div>
      )} */}
    </div>
  );
};

export default Users;
