import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import { Spinner } from "react-bootstrap";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error("wrong");
        }
        return response.json();
      })
      .then((response) => {
        setLoading(false);
        setMovie(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (error) {
    return <NotFound />;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="box">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div style={{ margin: "1rem" }}>
          <div>
            <span className="title" style={{ fontWeight: "bolder" }}>
              {movie.original_title}
            </span>
            <span className="date">({movie.release_date.substring(0, 4)})</span>
          </div>
          <div>
            <span>
              {movie.genres.map((genre, index) => {
                if (index === 0) {
                  return <span>{genre.name}</span>;
                } else if (index === movie.genres.length - 1) {
                  return <span> {genre.name} •</span>;
                } else {
                  return <span> ,{genre.name}</span>;
                }
              })}
            </span>
          </div>
          <p style={{ color: "rgb(200,200,255)" }}>{movie.overview}</p>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            other movies
          </button>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
