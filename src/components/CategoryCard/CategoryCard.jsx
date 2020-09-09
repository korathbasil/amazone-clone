import React from "react";
import "./CategoryCard.css";
import Product from "../Product/Product";

function Categorycard(props) {
  return (
    <div className="categoryCard">
      <h2 className="categorycard__title">{props.category}</h2>
      <div className="categoryCard__productsContainer">
        {props.products.map((p) => (
          <Product
            name={p.name}
            image={p.image}
            price={p.price}
            rating={p.rating}
          />
        ))}
        {/* <Product
          name="Echo Dot"
          image="https://images-na.ssl-images-amazon.com/images/I/51xareNhn3L._SX522_.jpg"
          price="210"
        />
        <Product
          name="Echo Dot"
          image="https://images-na.ssl-images-amazon.com/images/I/51xareNhn3L._SX522_.jpg"
          price="210"
        />
        <Product
          name="Echo Dot"
          image="https://images-na.ssl-images-amazon.com/images/I/51xareNhn3L._SX522_.jpg"
          price="210"
        /> */}
      </div>
    </div>
  );
}

export default Categorycard;
