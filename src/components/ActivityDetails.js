import React from 'react';
import ImageContainer from './ImageContainer';
import ActivityInfo from './ActivityInfo';
import GoogleReviewSummary from './GoogleReviewSummary';

function ActivityDetail({ data }) {
  const { activity_name, description, img, location, cost, activity_type } = data;

  return (
    <article className="activity-detail">
      <div className="activity-content">
        <ImageContainer title={activity_name} imageSrc={img} />
        <ActivityInfo description={description} location={location} cost={cost} activityType={activity_type} />
      </div>
      <GoogleReviewSummary />
    </article>
  );
}

export default ActivityDetail;