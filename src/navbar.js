import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <a href="home" className="logo">
        Logo
      </a>
      <div className="navbar-right menu">
        <a href="home" className="active">
          Home
        </a>
        <a href="products">Products</a>

        <a href="contact">Contacts</a>

        <a href="/">Logout</a>
      </div>
      <div className="navbar-right">
        <a href="#" className="cart">
          <i className="bx bx-cart-alt"></i>
          <span className="badge">2</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
