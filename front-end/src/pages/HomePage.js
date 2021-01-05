import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product ";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product, i) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;