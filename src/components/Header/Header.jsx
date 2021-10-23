import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <div className="logo-name">
              <img src={logo} alt="" />
            </div>
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

        {/* <div className="product-right">
          <Link to="/cart">
            <HiShoppingBag className="icon" />
          </Link>
        </div> */}
      </nav>
    </>
  );
}

export default Header;
