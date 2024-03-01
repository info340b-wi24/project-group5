import React from 'react';

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="review-title">
        <h3>REVIEWS</h3>
      </div>
      <div className="review-cards">
        {/* Static review card placeholders */}
        <div className="review-card"></div>
        <div className="review-card"></div>
        <div className="review-card"></div>
      </div>
      {/* Review form */}
      <form className="write-review">
        <h3>Write your Review</h3>
        <textarea placeholder="How was your experience..." />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default Reviews;
