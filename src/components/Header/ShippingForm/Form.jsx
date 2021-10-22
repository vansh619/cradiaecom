import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <h1>Shipping</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <div className="form">
        <div className="fields fields--2">
          <label className="field">
            <span className="fieldLabel" for="firstname">
              First name
            </span>
            <input className="fieldInput" type="text" id="firstname" />
          </label>
          <label className="field">
            <span className="fieldLabel" for="lastname">
              Last name
            </span>
            <input className="fieldInput" type="text" id="lastname" />
          </label>
        </div>
        <label className="field">
          <span className="fieldLabel" for="address">
            Address
          </span>
          <input className="fieldInput" type="text" id="address" />
        </label>
        <label className="field">
          <span className="fieldLabel" for="number">
            Mobile Number
          </span>
          <input className="fieldInput" type="number" id="number" />
        </label>
        <div className="fields fields--3">
          <label className="field">
            <span className="fieldLabel" for="zipcode">
              PIN code
            </span>
            <input className="fieldInput" type="text" id="pincode" />
          </label>
          <label className="field">
            <span className="fieldLabel" for="city">
              City
            </span>
            <input className="fieldInput" type="text" id="city" />
          </label>
          <label className="field">
            <span className="fieldLabel" for="state">
              State
            </span>
            <select className="fieldInput" id="state">
              <option value=""></option>
            </select>
          </label>
        </div>
      </div>
      <hr />
      <button className="button">Continue</button>
    </div>
  );
};

export default Form;
