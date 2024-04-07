import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("all");
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    setProducts(products);
    console.log(products);
  };
  const getType = (e) => {
    setType(e.target.value);
  };
  const filterdProducts =
    type === "all"
      ? products.filter((items) => items)
      : products.filter((items) => items.type === type);
  console.log(filterdProducts);
  return (
    <>
      <section>
        <select name="" id="" onChange={getType}>
          <option value="all">Sort</option>
          <option value="all">All</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="monitor">Monitor</option>
        </select>
        <div className="container">
          {filterdProducts.map((products) => {
            return <Card key={products._id} {...products}></Card>;
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
