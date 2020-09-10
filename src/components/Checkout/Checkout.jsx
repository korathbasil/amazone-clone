import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateContext } from "../../ContextProvider";

function Checkout() {
  const [{ basket, subTotal }, dispatch] = useStateContext();
  return (
    <div className="checkout">
      <div className="checkout__body">
        <div className="checkout__bodyHeaderContainer">
          <h2 className="checkout__bodyHeader">Shopping Cart</h2>
          <h4 className="checkout__bodyHeaderGreetings">
            Hello, John Casillas
          </h4>
        </div>
        {basket.length > 0 ? (
          <div className="checkout__bodyMain">
            <div className="checkout__bodyMainColumnLabelContainer">
              <p>Price</p>
            </div>

            <div className="checkout__bodyMainProducts">
              {basket.map((product) => (
                <CheckoutProduct
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  index="1"
                />
              ))}
            </div>
            <div className="checkout__bodyMainSubtotalContainer">
              <p>Subtotal ({basket.length} Items) :</p>
              <h4>{subTotal}</h4>
            </div>
          </div>
        ) : null}
        {basket.length < 1 ? (
          <div className="checkout__bodyEmptyCart">
            <h2 className="checkout__emptyCartText">
              Your Shopping Cart is empty.
            </h2>
          </div>
        ) : null}
      </div>
      <div className="checkout__widgets">
        <div className="checkout__widgetTopImageContainer">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt=""
            className="checkout__widgetsTopImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;

//
