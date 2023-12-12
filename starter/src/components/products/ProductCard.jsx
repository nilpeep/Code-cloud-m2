import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ image, title, price }) => {
  const [fav, setFav] = useState(false);
  const handleFavorite = () => {
    setFav(!fav);
  };

  return (
    <Card className="rounded-2 mb-3 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price} $</Card.Title>
        <MdFavorite
          onClick={handleFavorite}
          className={fav ? "text-danger" : ""}
          size={30}
        />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
