import React, { useState } from "react";
import "./Home.css";
import "../../ProductCard/ProductCard.css";
// import ProductCard from "../../ProductCard/ProductCard";

const Home = () => {
  let price = 150;
  let itemName = "Allu lelo";
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
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="ProductImage"
          className="productImage"
        />
        <h1>{itemName}</h1>
        <p className="price">
          Rs.<span>{price}</span>
        </p>
        <p>150 Rupey me dega</p>
        <p>
          <button onClick={addItem}>Add to Cart</button>
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="home">
        <section className="leftSidebar">
          <div className="catogory top-titles">Products</div>
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

        <section className="selectedBag">
          <div className="top-bagSide top-titles">
            <div>Bag</div>
            <button className="btn" onClick={removeAll}>
              Clear Bag
            </button>
          </div>
          <div className="cartItems">
            <div className="itemName">{itemName}</div>
            <div className="itemPrice">{add}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
