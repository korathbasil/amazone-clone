import React, { useEffect, useState } from "react";
import "./CategoryCard.css";
import Product from "../Product/Product";
import { useStateContext } from "../../ContextProvider";

function Categorycard({ category }) {
  const [
    { subTotal, echoProducts, mobileProducts, laptopProducts },
    dispatch,
  ] = useStateContext();

  return (
    <div className="categoryCard">
      <h2 className="categorycard__title">{category}</h2>
      <div className="categoryCard__productsContainer">
        {category === "Amazon Echo"
          ? echoProducts.map((p) => (
              <Product
                name={p.name}
                image={p.image}
                price={p.price}
                rating={p.rating}
              />
            ))
          : null}
        {category === "Mobiles"
          ? mobileProducts.map((p) => (
              <Product
                name={p.name}
                image={p.image}
                price={p.price}
                rating={p.rating}
              />
            ))
          : null}
        {category === "Laptops"
          ? laptopProducts.map((p) => (
              <Product
                name={p.name}
                image={p.image}
                price={p.price}
                rating={p.rating}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Categorycard;
