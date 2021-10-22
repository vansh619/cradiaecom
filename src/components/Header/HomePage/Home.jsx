import React, { useState } from "react";
import "./Home.css";
import "../../ProductCard/ProductCard.css";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
// import ProductCard from "../../ProductCard/ProductCard";

const Home = () => {
  let price = 150;
  let itemName = "Item Name";
  const [add, setAdd] = useState(price);

  const addItem = () => {
    setAdd(add + price);
    console.log(add);
  };
  const removeAll = () => {
    if (add > !1) {
      setAdd(0);
    }
  };

  const ProductCard = () => {
    return (
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="ProductImage"
          className="productImage"
        />
        <div>
          <h1>{itemName}</h1>
          <p>Descriptions</p>
        </div>
        <div>
          <p className="price">
            Rs.<span>{price}</span>
          </p>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </div>
    );
  };

  const Cart = () => {
    return (
      <>
        <section className="selectedBag">
          <div className="top-bagSide top-titles">
            <div>Bag</div>
            <button className="btn" onClick={removeAll}>
              Clear Bag
            </button>
          </div>

          <div className="cartItems">
            <div className="cartTop">
              <p>Total Items</p>
              <p>Total Price {add}</p>
            </div>
            <div className="deliveryCharge">
              <p>Delivery Charges</p> <span>Free</span>
            </div>
            <div className="cartMiddle">
              <div>
                <p>Grand Total</p>
                <p>Inclusive of all taxes</p>
              </div>
              <div>{add}</div>
            </div>

            <div className="deliverytime">
              <p>
                delivery time: <span>4-24 hour</span>
              </p>
            </div>
            <Link to="/shipping">
              <button className="proceedbtn">Proceed to Buy</button>
            </Link>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="home">
        <section className="leftSidebar">
          <div className="leftTop">
            <BsList className="leftHumburg" />
          </div>
        </section>
        <section className="centerProduct">
          <div className="top-titles">All Products</div>
          <div className="products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <Cart />
      </div>
    </>
  );
};

export default Home;
