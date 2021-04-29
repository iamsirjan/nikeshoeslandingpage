import React from "react";
import { Link } from "react-router-dom";

function cart() {
  return (
    <div className="cart">
      <div className="navbar">
        <a href="home" className="logo">
          Logo
        </a>

        <div className="navbar-right menu">
          <a href="#" className="active">
            New releases
          </a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </div>
        <div className="navbar-right">
          <a href="#" className="cart">
            <i className="bx bx-cart-alt"></i>
            <span className="badge">2</span>
          </a>
        </div>
      </div>
      <h1 className="text-center"> Cart Items</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="tableimage">
              <img src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/zoomx-vaporfly-next-running-shoe-4Q5jfG.png?raw=true" />
            </td>
            <td>Nike ZoomX Vaporfly NEXT%</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td className="tableimage">
              <img src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/zoom-fly-3-mens-running-shoe-XhzpPH.png?raw=true" />
            </td>
            <td>Nike Zoom Fly 3</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td className="tableimage">
              <img src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png?raw=true" />
            </td>
            <td>Nike Air Max Alpha TR 3</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row"></th>

            <td className="tabletotal">Total</td>
            <td></td>
            <td>600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default cart;
