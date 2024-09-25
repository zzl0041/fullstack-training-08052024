import { useState } from 'react';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <div className="user-list-container">
        <UserList onUserSelect={setSelectedUser} />
      </div>
      <div className="user-profile-container">
        <UserProfile username={selectedUser} />
      </div>
    </div>
  );
};

export default App;
