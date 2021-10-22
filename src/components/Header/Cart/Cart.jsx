import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <div>
          <h2 className="checkoutTitle">Your Cart items</h2>
        </div>
      </div>

      <div className="checkoutRight">
        <h2>The amount is</h2>

        {/* Cart Item */}
        {/* Cart Item */}
        {/* Cart Item */}
        {/* Cart Item */}
        {/* Cart Item */}

        <Link to="/shipping">
          <button className="shipButton">Ship to</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
