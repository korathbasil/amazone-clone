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
      <h4 className="product__title">{name}</h4>
      <div className="product__priceContainer">
        <h4 className="product__price">${price}</h4>
        <button className="product__addCart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
