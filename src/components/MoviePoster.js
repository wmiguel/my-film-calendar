import React from "react";
import { useState, useEffect } from "react";

const MoviePoster = ({ posterID }) => {
  
  const [posterURL, setposterURL] = useState([]);
  const [movieID, setmovieID] = useState([]);

  useEffect(() => {
    const getPosterRequest = async (posterID) => {
      const url = `http://www.omdbapi.com/?apikey=206bdf85&i=${posterID}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setposterURL(responseJson.Poster);
      setmovieID(responseJson.imdbID);
    };
    getPosterRequest(posterID);
  }, [posterID]);
  
  return (
    <div className="film-poster">
      <img src={posterURL} alt="movie" key={movieID} />
    </div>
  );

};
export default MoviePoster;