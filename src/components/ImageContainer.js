import React from 'react';

function ImageContainer({ title, imageSrc }) {
  return (
    <div className="image-container">
      <h2 className="pic-title">{title}</h2>
      <img src={imageSrc} alt="Activity" className="activity-image" />
    </div>
  );
}

export default ImageContainer;
