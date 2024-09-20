import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='home-page'>
      <h1>Home</h1>
      {user ? (
        <>
          <h3>Welcome {JSON.parse(user).name}</h3>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <Link to='login'>Login</Link>
      )}
    </div>
  );
}
