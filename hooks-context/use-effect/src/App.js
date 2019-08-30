import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USERS_URL}/users.json`)
      .then(response => response.json())
      .then(response => setUsers(response))
  }, []);

  function handleUserClick(id) {
    const user = users.find(o => o.id === id);
    setSelectedUser({ id: user.id, name: user.name });
    setUsers(prevUsers => prevUsers.map(user => {
      user.active = user.id === id;
      return user;
    }))
  }

  return (
    <div className="container">
      <List users={users} onClick={handleUserClick} />
      {selectedUser ? <Details info={selectedUser} /> : null}
    </div>
  );
}

export default App;
