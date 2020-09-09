import React from "react";
import "./Product.css";

function Product({ name, image, price }) {
  return (
    <div className="product">
      <div className="product__ratingContainer">
        <div className="product__rating">
          <p>5stars</p>
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <h5 className="product__title">{name}</h5>
      <div className="product__priceContainer">
        <h5 className="product__price">{price}</h5>
        <button className="product__addCart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
