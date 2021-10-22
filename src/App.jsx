import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Header/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Header/Cart/Cart";
import Form from "./components/Header/ShippingForm/Form";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>

          <Route path="/shipping" exact>
            <Form />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
