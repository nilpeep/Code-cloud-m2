import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import { Spinner } from "react-bootstrap";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(false);

  const [movie, setMovie] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = () => {
    setLoading(true);
    console.log("get movie calismiyo");
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("something wrong");
        } else {
          return response.json();
        }
      })
      .then((res) => setMovie(res))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(error);
  console.log(movie);

  if (loading) {
    return <Spinner style={{ width: "200px", height: "200px" }} />;
  } else if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="box">
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
          alt=""
        />

        <div>
          <span className="title">{movie?.original_title}</span>
          <span className="date">({movie?.release_date})</span>
          <span>
            {movie?.genres?.map((genre, index) => {
              if (index === 0) {
                return <span>{genre.name}</span>;
              } else if (index === movie?.genres.length - 1) {
                return <span> {genre.name} •</span>;
              } else {
                return <span> ,{genre.name}</span>;
              }
            })}
          </span>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            other movies
          </button>
          <p>{movie?.overview}</p>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
