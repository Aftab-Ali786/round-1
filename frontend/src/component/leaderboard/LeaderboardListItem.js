import React from 'react';
import './LeaderboardListItem.css';

const LeaderboardListItem = ({ user, rank }) => {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-user-info">
        <span className="leaderboard-rank">{rank}</span>
        <img src={user.avatar} alt={user.name} className="leaderboard-avatar" />
        <span className="leaderboard-name">{user.name}</span>
      </div>
      <span className="leaderboard-points">{user.totalPoints} pts</span>
    </div>
  );
};

export default LeaderboardListItem;
