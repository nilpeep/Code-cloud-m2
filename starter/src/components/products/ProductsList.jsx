import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const updatedList = products.map((item) => ({ ...item, favorite: false }));
  const [btnName, setBtnName] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(updatedList);
  const [search, setSearch] = useState("");

  const handleFilter = (item) => {
    setBtnName(item);
  };

  const handleFavorite = (id) => {
    const updated = selectedCategory.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    setSelectedCategory(updated);
  };

  console.log(search);

  return (
    <>
      <Header handleFilter={handleFilter} categories={categories} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {(btnName == "all"
            ? selectedCategory
            : selectedCategory.filter((eleman) => eleman.category == btnName)
          )
            .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                handleFavorite={handleFavorite}
              />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
