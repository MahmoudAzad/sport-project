import React from "react";
import { useParams } from "react-router";
import ProductsCards from "../components/Card/ProductsCards";

const Products = () => {
  const { endPath } = useParams();
  console.log("endPath products => ", endPath);

  return <ProductsCards endPath={endPath} />;
};

export default Products;
