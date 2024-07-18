import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../Products";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./paymentform";
import { Storecontext } from "../context/Store-context";
import Cartitem from "./Cartitem";

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Storecontext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  const empty = "/assets/emptycart.avif";

  return (
    <div className="cart carts mt-5">
      <div>
      {/* <PaymentForm />  */}
        <h1>HELLO DEAR !!!</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Cartitem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: N{totalAmount} </p>
          <button onClick={() => navigate("/Store")}>
            {" "}
            Continue Shopping{" "}
          </button>
          <button
            onClick={() => {
              navigate("/paymentform");
            }}
          >
            Checkout
          </button>
          <PaymentForm /> 
        </div>
      ) : (
        <div
          className="text-center mt-5"
          style={{ width: "100%", height: "100%" }}
        >
          <h1 className="mb-5"> Your Shopping Cart is Empty</h1>
          <marquee direction="right" behavior="scroll" loop="infinity">
            <img
              src={empty}
              alt=""
              style={{ width: "100%" }}
              className="empty"
            />
          </marquee>
        </div>
      )}
    </div>
  );
}
