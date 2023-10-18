import React, { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('/src/data/users.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  return (
    <div>
      <List users={users} onUserClick={handleUserClick} />
      <Details info={selectedUser} />
    </div>
  );
}

export default App;
