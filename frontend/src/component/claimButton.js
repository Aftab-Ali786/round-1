import React from 'react';
import './ClaimButton.css';

function ClaimButton({ selectedUserId, onClaim }) {
  const handleClick = () => {
    if (!selectedUserId) {
      alert('Please select a user before claiming points.');
      return;
    }
    onClaim();
  };

  return (
    <div className="claim-button-container">
      <button className="claim-button" onClick={handleClick}>
        Claim Points
      </button>
    </div>
  );
}

export default ClaimButton;
