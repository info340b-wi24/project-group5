import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

function ReviewsSection() {
  const [reviews, setReviews] = useState([
    // Initially populate this array with any existing reviews
    // Example: { id: 1, content: 'Great experience!' }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to add a new review based on form input
    // Don't forget to update the state with the new review
  };

  return (
    <section className="reviews">
      <div className="review-title">
        <h3>REVIEWS</h3>
      </div>

      <div className="review-cards">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <form className="write-review" onSubmit={handleSubmit}>
        <h3>Write your Review</h3>
        <textarea placeholder="How was your experience..."></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default ReviewsSection;
