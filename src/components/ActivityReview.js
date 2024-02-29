import React, { useState, useEffect } from 'react';
import ActivityDetail from './ActivityDetails';
import ReviewsSection from './ReviewsSection';
import activitiesData from '../data/activities.json';

function ActivityComponent() {
  // State to hold activities data
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    setActivities(activitiesData);
  }, []);

  return (
    <main>
      {activities.map((activity, index) => (
        <ActivityDetail key={index} data={activity} />
      ))}
      <ReviewsSection />
    </main>
  );
}

export default ActivityComponent;