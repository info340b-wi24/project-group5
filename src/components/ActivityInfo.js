import React from 'react';

const ActivityInfo = ({ activity }) => {
  return (
    <div className="activity-info">
      <strong>About</strong>
      <div class="revdescription">
      {activity.description}
        </div> 
      <div className="address">
        <strong>Address:</strong> {activity.location}
      </div>
      <div className="hours">
        <strong>Hours:</strong> {activity.time || 'Not specified'}
      </div>
      {/* Add other relevant information as needed */}
    </div>
  );
};

export default ActivityInfo;
