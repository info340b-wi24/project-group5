import React from 'react';
import ImageContainer from './ImageContainer'; // Import ImageContainer
import ActivityInfo from './ActivityInfo'; // Import ActivityInfo
import Reviews from './Reviews'; // Import Reviews

const ActivityDetail = ({ activities }) => {
  const firstActivity = activities[0];
  
  return (
    <article className="activity-detail">
      <ImageContainer activity={firstActivity} />
      <ActivityInfo activity={firstActivity} />
      <Reviews />
    </article>
  );
};

export default ActivityDetail;
