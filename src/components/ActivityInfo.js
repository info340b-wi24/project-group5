import React from 'react';

const ActivityInfo = ({ activity }) => {
  return (
    <div className="activity-info">
      <ul>
        <li>Description: {activity.description}</li>
        <li>Location: {activity.location}</li>
        <li>Cost: ${activity.cost}</li>
        <li>Other Info: {activity.activity_type.join(', ')}</li>
      </ul>
    </div>
  );
};

export default ActivityInfo;
