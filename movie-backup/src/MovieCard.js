import React, { useState } from "react";

const MovieCard = ({ title, year, rating, duration, image, stars }) => {
  const [userRating, setUserRating] = useState(0);

  const handleRating = (newRating) => {
    setUserRating(newRating);
  };

  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        {year} • {rating} • {duration}
      </p>
      <div className="stars">
        <p>Critic Rating: {"⭐".repeat(stars)}</p>
        <p>Your Rating:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: "pointer",
              color: userRating >= star ? "gold" : "gray",
              fontSize: "1.5rem",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p>{userRating ? `You rated: ${userRating}/5` : "Click to rate!"}</p>
    </div>
  );
};

export default MovieCard;
