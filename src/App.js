import React from "react";
import "./App.css";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_2 from "./home_2";
import Home_3 from "./home_3";
import Home_4 from "./home_4";
import Cart from "./cart";
import Contact from "./contact";
import Login from "./login";
import Register from "./register";
import Product from "./product";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home_2">
            <Home_2 />
          </Route>
          <Route path="/home_3">
            <Home_3 />
          </Route>
          <Route path="/home_4">
            <Home_4 />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/products">
            <Product />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
