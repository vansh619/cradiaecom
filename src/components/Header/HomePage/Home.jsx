import React from "react";
import "./Home.css"
import ProductCard from "../../ProductCard/ProductCard";
const Home = () => {
    return (
        <div className="home">
        <div className="homeContainer">
           <img
           className="homeImage"
           src="./banner.jpeg"
           alt="BannerImage"
           />
           <ProductCard/>
        </div>
        </div>
    )
}

export default Home;
