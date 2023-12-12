import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = ({ categories }) => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </Stack>
    </Container>
  );
};
