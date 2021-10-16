import React from "react";
import "./Header.css";
import { BsSearch } from 'react-icons/bs';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom";


function Header() {  
  return (
    <div className="header">
        <Link to="/">
        <img
          className="headerLogo"
          src="./slogo.png"
          alt="Logo"
        />
        </Link>
      

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <BsSearch className="headerSearchIcon" />
      </div>

      <div className="headerNav">
         <Link to="/cart">
          <div className="headerBasket">
          <span className="headerOptionTag">Cart</span>
            <AiOutlineShoppingCart />
            <span className="headerBasketCount">
              0
            </span>
          </div>
          </Link>
        
      </div>
    </div>
  );
}

export default Header;




