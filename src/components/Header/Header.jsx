import React from "react";
import "./Header.css";
import { BsSearch, BsList, BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="rightHumburg">
          <BsList />
        </div>
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

        <div className="product-right">
          <Link to="/cart">
            <BsHandbagFill className="icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
