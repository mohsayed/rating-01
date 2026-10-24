const Rating = () => {
  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star, ndx) => (
          <span  key={star}>{"\u2605"} <br /> {ndx + 1} </span>
        ))}
      </div>
    </div>
  );
};

export default Rating; // using default for one export only

// export  { Rating };   //  if not using default
