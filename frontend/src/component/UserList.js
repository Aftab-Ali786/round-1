import React from 'react';
import './UserList.css';

function UserList({ users, selectedUserId, setSelectedUserId }) {
  return (
    <div className="user-list-container">
      <h3>Select a User</h3>
      <select 
        className="user-select"
        value={selectedUserId} 
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">--Choose a user--</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserList;
