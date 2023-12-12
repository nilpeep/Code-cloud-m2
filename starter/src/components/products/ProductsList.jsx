import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [btnname, setBtnname] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(products);
  const [search, setSearch] = useState("");

  const handleFilter = (item) => {
    setBtnname(item);
    setSelectedCategory(
      item == "all"
        ? products
        : products.filter((eleman) => eleman.category == item)
    );
  };

  // console.log(btnname);
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
          {selectedCategory
            .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
