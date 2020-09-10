import React from "react";
import "./CheckoutProduct.css";
import { useStateContext } from "../../ContextProvider";

function CheckoutProduct({ name, price, image, index }) {
  const [{ basket, subTotal }, dispatch] = useStateContext();

  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_CART",
      index,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="ckeckoutProduct__left">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <h3 className="checkoutProduct__name">{name}</h3>
          <p>5Stars</p>
          <p className="checkoutProduct__stockText">In Stock</p>
          <p className="checkoutProduct__deliveryText">FREE Delivery</p>
          <button
            onClick={removeFromCart}
            className="checkoutProduct__removeFromCartButton"
          >
            Remove from Cart
          </button>
        </div>
      </div>
      <div className="checkoutProduct__right">
        <h4 className="checkoutProduct__price">${price}</h4>
      </div>
    </div>
  );
}

export default CheckoutProduct;
