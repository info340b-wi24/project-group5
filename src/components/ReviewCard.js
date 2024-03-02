import React from 'react';

// Define the ReviewCard component
function ReviewCard({ review }) {
  return (
    <div className="review-card">
      {/* Display review details */}
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewCard;
