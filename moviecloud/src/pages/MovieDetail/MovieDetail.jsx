import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import { Spinner } from "react-bootstrap";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((res) => setMovie(res));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie.genres);

  return (
    <div className="box">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

      <div>
        <span className="title">{movie.original_title}</span>
        <span>({movie.release_date})</span>
      </div>
      {/* <div>
        {movie.genres.map((genre) => (
          <span>{genre.name}</span>
        ))}
      </div> */}
    </div>
  );
};

export default MovieDetail;
