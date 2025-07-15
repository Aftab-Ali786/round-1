import React, { useState } from 'react';
import './AddUserForm.css';

function AddUserForm({ addUser }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(''); 

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || !avatar.trim()) return;

    addUser({ name, avatar }); 
    setName('');
    setAvatar('');
  };

  return (
    <form onSubmit={handleAdd} className="add-user-form">
      <h3>Add New User</h3>

      <input 
        type="text" 
        value={name} 
        placeholder="Enter new user name"
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        type="text" 
        value={avatar} 
        placeholder="Enter avatar image URL"
        onChange={(e) => setAvatar(e.target.value)}
      />

      <br />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
