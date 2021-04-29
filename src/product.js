import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { FaSearch } from "react-icons/fa";
function product() {
  return (
    <div className="product">
      <Navbar />
      <div className="searchbar">
        <div class="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />

          <button>
            {" "}
            <FaSearch />{" "}
          </button>
        </div>
      </div>
      <div className="products_row">
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQCTpIIWS2xGWP9IsEyiHziBgvGlcuc-I-A&usqp=CAU" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://media.finishline.com/s/finishline/AH6789_601?$default$&w=245&bg=rgb(237,237,237)" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9094123f-f624-4f32-9df8-9093bcc4c0ee/flyby-mid-basketball-shoe-Q2Gp58.png" />
          </div>
          <div className="product_price"> $200</div>

          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="data:image/jpeg;base64,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" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c43f926d-bb0f-440f-b863-3118eb4c0142/air-zoom-alphafly-next-racing-shoe-13jzhr.png" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="products_row">
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://media.finishline.com/s/finishline/AH6789_601?$default$&w=245&bg=rgb(237,237,237)" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGA_OeemLgoYY5HHB3y3MvBFwQHN0SPmRcTg&usqp=CAU" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/q_auto:eco/t_PDP_864_v1/f_auto/29f48a76-2ff8-4422-b818-b6386dd367f3/air-zoom-pegasus-38-little-big-kids-running-shoe-kGSw18.png" />
          </div>
          <div className="product_price"> $200</div>

          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ef5e709-2a24-4385-9457-7ef8ed4d917f/blazer-low-77-vintage-mens-shoe-pkcNzf.png" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e31cd3f4-4af2-49a2-a841-2ccb7d42c1f7/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.png" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="products_row">
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/711b92b1-4ce4-489a-8f51-f74766f27371/air-max-bolt-older-shoe-ps5PQC.png" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb5da2eb-fc2d-4e08-9e87-823f2eb661fe/lebron-witness-5-basketball-shoe-XJrPgC.png" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6LOT9KH9ItPtMCrOxDkMR-3LSdTby7MdQg&usqp=CAU" />
          </div>
          <div className="product_price"> $200</div>

          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6LOT9KH9ItPtMCrOxDkMR-3LSdTby7MdQg&usqp=CAU" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
        <div className="products_container">
          <div className="product_name">Nike Shoes Jump </div>
          <div className="product_image">
            <img src="https://media1.popsugar-assets.com/files/thumbor/QNuLfswcG492MOGVW_O0KOr53P0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/10/043/n/1922729/8e0b7bce5f31e00e85c2f3.46010306_cortez/i/Nike-Classic-Cortez-Shoe.jpg" />
          </div>
          <div className="product_price"> $200</div>
          <Link to="cart">
            <div className="cartbutton">
              <button>Add to cart</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default product;
