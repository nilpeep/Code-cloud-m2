import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MovieCard() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState(null);

  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      console.log("value yok");
      getMovies(baseUrl);
    } else {
      getMovies(searchUrl);
    }
  };

  useEffect(() => {
    getMovies(baseUrl);
  }, []);

  return (
    <div>
      <div className="search-box">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            style={{ color: "black" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
