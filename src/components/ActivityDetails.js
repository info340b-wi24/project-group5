import React from 'react';

const ActivityDetail = ({ activity }) => {

  return (
    <article className="activity-detail">
      <div className="activity-content">
        <div className="image-container">
          <h2 className="pic-title">{activity.activity_name}</h2>
          <img src={`${process.env.PUBLIC_URL}/${activity.img}`} alt="Activity Image" className="activity-image" />
        </div>
        <div className="activity-info">
          <strong>About</strong>
          <div className="revdescription description">
            {activity.description}
          </div>
          <div className="address description">
            <strong>Address:</strong> {activity.location}
          </div>
          <div className="hours description">
            <strong>Hours:</strong> {activity.time || 'Not specified'}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ActivityDetail;

