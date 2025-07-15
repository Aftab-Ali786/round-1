import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './component/UserList';
import AddUserForm from './component/AddUserForm';
import Leaderboard from './component/leaderboard/Leaderboard';
import ClaimButton from './component/claimButton';
import './App.css';

const API = "http://localhost:5000/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [lastClaim, setLastClaim] = useState(null); // to show last claim details
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch all users and leaderboard on component mount & after any updates
  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get(`${API}/leaderboard`);
    setLeaderboard(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  // Called when claim is clicked
  const claimPoints = async () => {
    if (!selectedUserId) return alert("Please select a user");
    try {
      const res = await axios.post(`${API}/claim/${selectedUserId}`);
      setLastClaim(res.data);
      fetchUsers();
      fetchLeaderboard();
    } catch (error) {
      console.error("Claim error:", error);
    }
  };

  // Add a new user from the form
 const addUser = async ({ name, avatar }) => {
  try {
    await axios.post(API, { name, avatar }); 
    fetchUsers();
    fetchLeaderboard();
  } catch (error) {
    console.error("Add user error:", error);
  }
};


  return (
    <div style={{ padding: '20px' }}>
      <h2 className='title-heading'>task-Round1</h2>
    <Leaderboard users={leaderboard} />
      {/* Option to add a new user */}
      <AddUserForm addUser={addUser} />

      {/* User selection list */}
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />

      <ClaimButton
        selectedUserId={selectedUserId}
        onClaim={claimPoints}
      />

      {lastClaim && (
        <p className='award-point'>
          Awarded <strong>{lastClaim.pointsClaimed}</strong> points to{' '}
          <strong>{lastClaim.user.name}</strong>
        </p>
      )}

    </div>
  );
}

export default App;

