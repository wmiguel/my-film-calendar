import React from "react";

const MovieDate = ({ movieDate }) => {
  const weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
  const date = new Date(movieDate);
  const dayDate = date.getDate();
  const dayNumber = date.getDay();
  const dayName = weekday[dayNumber];

  return (
    <div className="Date">
      <div className="date-border">
        <span>{dayName}</span>
        <h3>{dayDate}</h3>
      </div>
    </div>
  );
};

export default MovieDate;
