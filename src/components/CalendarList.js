import { useState, useEffect } from "react";
import Data from "../csv-files/film-calendar.csv";
import Papa from "papaparse";

import MovieDate from "./MovieDate";
import MoviePoster from './MoviePoster';
import MovieData from "./MovieData";

function CalendarList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decorder = new TextDecoder("utf-8");
      const csvData = decorder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  

  return (
    <div className="CalendarList">
      {/* <div className="CalendarMonth">
        <h2>March 2024</h2>
      </div> */}
      {data.length ? (
        <div className="CalendarDay">
          {data.map((row, index) => (
            <div className="DateWrap" key={index}>
              <MovieDate movieDate={row.Date} />

              <div className="FilmList">
                <div className="film">
                  <MoviePoster posterID={row.IMDbID} />
                  <MovieData
                    movieTitle={row.Title}
                    movieYear={row.Year}
                    movieSeries={row.Series}
                    movieFormat={row.Format}
                    movieDuration={row.Duration}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CalendarList;