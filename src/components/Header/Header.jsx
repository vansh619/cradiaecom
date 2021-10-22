import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <div className="logo-name">MARK</div>
          </Link>
        </div>
        <div className="search-bar">
          <input
            className="input"
            type="search"
            name="search Items"
            id="search"
            placeholder="search for products"
          />
          <div className="search-icon">
            <BsSearch />
          </div>
        </div>
        <div className="product-right">
          <Link to="/cart">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
