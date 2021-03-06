import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateContext } from "../../ContextProvider";
import Rating from "@material-ui/lab/Rating";

const CheckoutProduct = forwardRef(
  ({ name, price, image, rating, index }, ref) => {
    const [{ basket, subTotal }, dispatch] = useStateContext();

    const removeFromCart = (e) => {
      e.preventDefault();
      dispatch({
        type: "REMOVE_FROM_CART",
        index,
        price: price,
      });
    };
    return (
      <div className="checkoutProduct" ref={ref}>
        <div className="ckeckoutProduct__left">
          <img src={image} alt="" className="checkoutProduct__image" />
          <div className="checkoutProduct__info">
            <h3 className="checkoutProduct__name">{name}</h3>
            {/* <Rating name="read-only" value={rating} readOnly /> */}
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
);

export default CheckoutProduct;
