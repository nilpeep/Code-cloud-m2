import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MovieCard() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  const getMovies = () => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };

  useEffect(() => {
    getMovies(baseUrl);
  }, []);

  return (
    <div>
      <div className="search-box">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            style={{ color: "black" }}
          />
          <i className="search-icon fas fa-search"></i>
        </form>
      </div>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} style={{ padding: "0.5rem" }}>
            <Card
              style={{ width: "12rem" }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <Card.Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieCard;
