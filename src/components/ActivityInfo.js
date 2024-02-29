import React from 'react';

function ActivityInfo({ description, location, cost, activityType }) {
  return (
    <div className="activity-info">
      <ul>
        <li>{description}</li>
        <li>{location}</li>
        <li>{cost}</li>
        <li>{activityType.join(', ')}</li> {/* Assuming activityType is an array */}
      </ul>
    </div>
  );
}

export default ActivityInfo;