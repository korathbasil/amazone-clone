import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateContext } from "../../ContextProvider";
import EmptyCartImage from "./empty-cart.png";
import Flipmove from "react-flip-move";
import Header from "../Header/Header";

function Checkout() {
  const [{ basket, subTotal, user }, dispatch] = useStateContext();
  return (
    <div className="checkout__wrapper">
      <Header />
      <div className="checkout">
        <div className="checkout__body">
          <div className="checkout__bodyHeaderContainer">
            <h2 className="checkout__bodyHeader">Shopping Cart</h2>
            <h4 className="checkout__bodyHeaderGreetings">
              Hello, {user.displayName}
            </h4>
          </div>
          {basket.length > 0 ? (
            <div className="checkout__bodyMain">
              <div className="checkout__bodyMainColumnLabelContainer">
                <p>Price</p>
              </div>

              <div className="checkout__bodyMainProducts">
                <Flipmove>
                  {basket.map((product) => (
                    <CheckoutProduct
                      key={product.name}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      rating={product.rating}
                      index={basket.indexOf(product)}
                    />
                  ))}
                </Flipmove>
              </div>
              <div className="checkout__bodyMainSubtotalContainer">
                <p>Subtotal ({basket.length} Items) :</p>
                <h4>${subTotal}</h4>
              </div>
            </div>
          ) : null}
          {basket.length < 1 ? (
            <div className="checkout__bodyEmptyCart">
              <img
                src={EmptyCartImage}
                alt=""
                className="checkout__emptyCart"
              />
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
          {basket.length > 0 ? (
            <div className="checkout__widgetMain">
              <div className="checkout__widgetMainTop">
                <p>Your order is ligible for FREE Delivery</p>
              </div>
              <div className="checkout__widgetMainTotalContainer">
                <div className="checkout__widgetMainTotal">
                  <p>Subtotal ({basket.length} Items) :</p>
                  <h4>${subTotal}</h4>
                </div>
                <button className="checkout__widgetMainCheckoutButton">
                  Proceed to Buy
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Checkout;

//
