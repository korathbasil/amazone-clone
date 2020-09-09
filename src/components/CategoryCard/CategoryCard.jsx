import React from "react";
import "./CategoryCard.css";
import Product from "../Product/Product";

function Categorycard({ category }) {
  return (
    <div className="categoryCard">
      <h4 className="categorycard__title">{category}</h4>
      <div className="categoryCard__productsContainer">
        <Product
          name="Echo Dot"
          image="https://images-na.ssl-images-amazon.com/images/I/51xareNhn3L._SX522_.jpg"
          price="210"
        />
      </div>
    </div>
  );
}

export default Categorycard;
