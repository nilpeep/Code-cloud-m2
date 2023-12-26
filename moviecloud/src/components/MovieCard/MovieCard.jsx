import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MovieCard() {
  return (
    <div class="search-box">
      <form>
        <input
          type="text"
          class="search-input"
          placeholder="Search for movies..."
          style={{ color: "black" }}
        />
        <i class="search-icon fas fa-search"></i>
      </form>
    </div>
  );
}

export default MovieCard;
