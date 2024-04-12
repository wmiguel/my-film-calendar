import React from "react";

const MovieData = ({
  movieTitle,
  movieYear,
  movieSeries,
  movieFormat,
  movieDuration,
}) => {
  return (
    <div className="film-info">
      <div className="film_title-year">
        <h4>
          {movieTitle} <span>{movieYear}</span>
        </h4>
      </div>
      <div className="film_series-format">
        <i>{movieSeries}</i>
        <p>
          {movieFormat} · {movieDuration}
        </p>
      </div>
    </div>
  );
};
export default MovieData;