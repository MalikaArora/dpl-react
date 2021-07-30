import React, { useState } from "react";
import './Rating.css'

const Rating = ( {totalStars, size} ) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
          
        );
      })}
      <p>
            {rating} of {totalStars} stars
      </p>
    </div>
  );
};

export default Rating;