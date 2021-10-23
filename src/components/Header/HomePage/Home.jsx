import React, { useState } from "react";
import "./Home.css";
import "../../ProductCard/ProductCard.css";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
// import ProductCard from "../../ProductCard/ProductCard";

const Home = () => {
  let price = 150;
  let itemName = "Item Name";
  const [add, setAdd] = useState(price);
  const [incm, setIncm] = useState(0);
  const [menuBar, setMenuBar] = useState(false);

  const addItem = () => {
    setAdd(add + price);
    setIncm(incm + 1);
    console.log(add);
  };
  const removeAll = () => {
    if (add > 1) {
      setAdd(0);
      setIncm(0);
    }
  };
  const incmItem = () => {
    if (add > 1) {
      setIncm(incm + 1);
    }
  };
  const decmItem = () => {
    if (add >= 1) {
      setIncm(incm - 1);
    }
    if (incm === 0) {
      setIncm(0);
    }
  };

  const hideNav = () => {
    setMenuBar(!menuBar);
    document.querySelector(".navlinks").classList.toggle("activeNav");
  };
  const openBag = () => {
    document
      .querySelector(".selectedBag")
      .classList.toggle("selectedBagActive");
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
          {/* <div className="opretors">
            <BiMinus onClick={decmItem} />
            {incm}
            <BiPlus onClick={incmItem} />
          </div> */}
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </div>
    );
  };

  const Cart = () => {
    return (
      <>
        <HiShoppingBag className="bag-icon icon" onClick={openBag} />
        <section className="selectedBag">
          <div className="top-bagSide top-titles">
            <div>Bag</div>
            <button className="btn" onClick={removeAll}>
              Clear Bag
            </button>
          </div>

          <div className="cartItems">
            <div className="cartTop">
              <div className="addRemoveItems">
                <p>Total Items</p>
                <div className="opretors">
                  <BiMinus onClick={decmItem} />
                  {incm}
                  <BiPlus onClick={incmItem} />
                </div>
              </div>
              <p>Total Price {add * incm}</p>
            </div>
            <div className="deliveryCharge">
              <p>Delivery Charges</p> <span>Free</span>
            </div>
            <div className="cartMiddle">
              <div>
                <p>Grand Total</p>
                <p>Inclusive of all taxes</p>
              </div>
              <div>{add * incm}</div>
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
          <div className="leftTop" onClick={hideNav}>
            {menuBar ? (
              <AiOutlinePlus className="leftHumburg cross" />
            ) : (
              <BsList className="leftHumburg" />
            )}
          </div>
          <ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Category</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
