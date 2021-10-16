import React from "react";
import "./ProductCard.css"

const ProductCard = () => {
    return (
<div class="card">
  <img src="./favicon.ico" alt="ProductImage" />
  <h1>Product Name</h1>
  <p class="price">Rs. 0000</p>
  <p>Description</p>
  <p><button>Add to Cart</button></p>
</div>

    )
}

export default ProductCard
