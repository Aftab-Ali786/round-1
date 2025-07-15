import React from 'react';
import PodiumTopThree from './PodiumTopThree';
import LeaderboardListItem from './LeaderboardListItem';
import './leaderboard.css'; 

const Leaderboard = ({ users }) => {
  if (!users || users.length === 0) return <p>No users found.</p>;

  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const topThree = sortedUsers.slice(0, 3);
  const others = sortedUsers.slice(3);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Monthly Leaderboard</h2>

      <PodiumTopThree topThree={topThree} />

      <div className="leaderboard-list">
        {others.map((user, idx) => (
          <LeaderboardListItem
            key={user._id}
            user={user}
            rank={idx + 4}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
