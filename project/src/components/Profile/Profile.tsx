

import React from 'react';
import profilePic from "src/components/assets/graph.png"; // correct path to your image

const Profile = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <span style={{ marginRight: '10px' }}>Profile</span>
      <img 
        src={profilePic} 
        alt="Radhika Audichya" 
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default Profile;

