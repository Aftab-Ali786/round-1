import React from 'react';
import './PodiumTopThree.css';

const PodiumTopThree = ({ topThree }) => {
  if (topThree.length < 3) return null;

  const [second, first, third] = topThree;

  return (
    <div className="podium-container">
      {/* 2nd Place */}
      <div className="podium-card podium-second">
        <img src={second.avatar} alt={second.name} className="podium-avatar avatar-second" />
        <p className="podium-name">{second.name}</p>
        <span className="podium-points">{second.totalPoints} pts</span>
      </div>

      {/* 1st Place */}
      <div className="podium-card podium-first">
        <img src={first.avatar} alt={first.name} className="podium-avatar avatar-first" />
        <p className="podium-name podium-name-first">{first.name}</p>
        <span className="podium-points podium-points-first">{first.totalPoints } pts</span>
      </div>

      {/* 3rd Place */}
      <div className="podium-card podium-third">
        <img src={third.avatar} alt={third.name} className="podium-avatar avatar-third" />
        <p className="podium-name">{third.name}</p>
        <span className="podium-points">{third.totalPoints} pts</span>
      </div>
    </div>
  );
};

export default PodiumTopThree;
