import React, { useState, useEffect } from 'react';

const ActivityFilter = () => {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('data/activities.json')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterActivities = (activities, searchTerm) => {
    return activities.filter(activity => {
      const activityName = activity.activity_name.toLowerCase();
      const activityType = activity.activity_type.join(' ').toLowerCase();
      const location = activity.location.toLowerCase();
      const cost = activity.cost.toString().toLowerCase();

      return activityName.includes(searchTerm) || 
             activityType.includes(searchTerm) ||
             location.includes(searchTerm) ||
             cost.includes(searchTerm);
    });
  };

  const filteredActivities = filterActivities(activities, searchTerm.toLowerCase());

  return (
    <div>
      <input
        type="text"
        placeholder="Search activities..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredActivities.map(activity => (
          <div key={activity.activity_name}>
            <h3>{activity.activity_name}</h3>
            <p>Type: {activity.activity_type.join(', ')}</p>
            <p>Location: {activity.location}</p>
            <p>Cost: {activity.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFilter;
