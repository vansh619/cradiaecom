import React from "react";
import "./Form.css"

const Form = () => {
    return (
<div class="container">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div class="form">
    
  <div class="fields fields--2">
    <label class="field">
      <span class="fieldLabel" for="firstname">First name</span>
      <input class="fieldInput" type="text" id="firstname" placeholder="Your first name" />
    </label>
    <label class="field">
      <span class="fieldLabel" for="lastname">Last name</span>
      <input class="fieldInput" type="text" id="lastname" placeholder="Your last name"  />
    </label>
  </div>
  <label class="field">
    <span class="fieldLabel" for="address">Address</span>
    <input class="fieldInput" type="text" id="address" />
  </label>
  <div class="fields fields--3">
    <label class="field">
      <span class="fieldLabel" for="zipcode">PIN code</span>
      <input class="fieldInput" type="text" id="pincode" />
    </label>
    <label class="field">
      <span class="fieldLabel" for="city">City</span>
      <input class="fieldInput" type="text" id="city" />
    </label>
    <label class="field">
      <span class="fieldLabel" for="state">State</span>
      <select class="fieldInput" id="state">
        <option value=""></option>
      </select>
    </label>
  </div>
  </div>
  <hr/>
  <button class="button">Continue</button>
</div>
    )
}

export default Form;
