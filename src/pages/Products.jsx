import React from "react";
import { useParams } from "react-router";
import ProductsCards from "../components/Card/ProductsCards";

const Products = () => {
  const { endPath } = useParams();
  return <ProductsCards endPath={endPath} />;
};

export default Products;
