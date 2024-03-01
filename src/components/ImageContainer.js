import React from 'react';

const ImageContainer = ({ activity }) => {
  return (
    <div className="image-container">
      <h2 className="pic-title">{activity.activity_name}</h2>
      <img src={activity.img} alt="Activity Image" className="activity-image" />
    </div>
  );
};

export default ImageContainer;