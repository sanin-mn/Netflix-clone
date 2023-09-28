import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../instance";
import "./Row.css";

function Row({ title, fetchUrl, isPoster }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie-row">
        {movies.map((item) => (
          <img
            className={`${isPoster && "movie-large"} movie`}
            src={`${base_url}/${isPoster ? item.poster_path : item.backdrop_path}`} alt="NO imag"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;