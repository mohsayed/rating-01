import { useState } from 'react';
import Star from './Star';

const Rating = ({ heading = 'Rate Your Experiance', color = 'gold' }) => {
  // state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  let [submitted, setSubmitted] = useState(false);

  // prepare array of items 1 to 5
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
  const currentFeedback = feedbackMessages[rating - 1];

  // building items array
  const ratingList = stars.map((star) => (
    <Star
      key={star}
      star={star}
      hover={hover}
      rating={rating}
      color={color}
      ratingClick={setRating}
      hoverEnter={setHover}
      hoverLeave={() => setHover(null)}
    />
  ));

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0); // Optional: Reset rating after submission
  };

  // building items array
  //   const ratingList = stars.map((star) => (
  //   <span
  //     key={star}
  //     className='star'
  //     style={{
  //             color: star <= (hover || rating) ? color : '#ccc',
  //           }}
  //     onClick={() => setRating(star)}
  //     onMouseEnter={() => setHover(star)}
  //     onMouseLeave={() => setHover(0)}
  //   >
  //     {'\u2605'}
  //   </span>
  // ));

  return (
    <div className='rating-container'>
      <h2>{heading}</h2>
      <div className='stars'>{ratingList}</div>
      <p>Rating is : {rating} </p>
      <p>Hover: {hover}</p>

      {/* Rating */}
      {/* { rating > 0 && <p className="feedback">{currentFeedback}</p>} */}
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

      {/* Submit Button */}
      <button
        className='submit-btn'
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      
      {/* Modal */}
      {submitted && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Thank You!</h2>
            <p>
              You rated us {rating} star{rating > 1 ? 's' : ''}
            </p>
            <button className='close-btn' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
