import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "./navbar";
function home() {
  return (
    <div className="home">
      <Navbar />
      <div id="slider" className="slider">
        <div className="row fullheight slide">
          <div className="col-6 fullheight">
            <div className="product-info">
              <div className="info-wrapper">
                <div className="product-price left-to-right">
                  <span>$</span>230
                </div>
                <div className="product-name left-to-right">
                  <h2>Nike Air Max Alpha TR 3</h2>
                </div>
                <div className="product-size left-to-right">
                  <h3>SIZE</h3>
                  <div className="size-wrapper">
                    <div>35</div>
                    <div>36</div>
                    <div className="active">37</div>
                    <div>38</div>
                    <div>39</div>
                    <div>40</div>
                  </div>
                </div>
                <div className="product-color left-to-right">
                  <h3>COLORS</h3>
                  <div className="color-wrapper">
                    <div className="active">
                      <div className="bg-red"></div>
                    </div>
                    <div className="">
                      <div className="bg-blue"></div>
                    </div>
                    <div className="">
                      <div className="bg-white"></div>
                    </div>
                  </div>
                </div>
                <div className="product-description left-to-right">
                  <p>
                    The Nike ZoomX Vaporfly NEXT% clears your path to
                    record-breaking speed with a lighter design and faster feel
                    than before. With more cushioning underfoot and reduced
                    weight up top, the result is unprecedented energy return and
                    comfort
                  </p>
                </div>
                <div className="button left-to-right">
                  <Link to="cart">
                    <button className="cart-button">Add to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 fullheight img-col-black">
            <div className="product-img">
              <div className="img-wrapper right-to-left">
                <div className="bounce">
                  <img
                    src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png?raw=true"
                    alt="thumbnail image"
                  />
                </div>
              </div>
            </div>

            <div className="more-images">
              <div className="more-images-item bottom-up">
                <img
                  src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png?raw=true"
                  alt="thumbnail image"
                />
              </div>
              <div className="more-images-item bottom-up">
                <img
                  src=" https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7%20(1).jpg?raw=true"
                  alt="thumbnail image"
                />
              </div>
              <div className="more-images-item bottom-up">
                <img
                  src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7%20(2).jpg?raw=true"
                  alt="thumbnail image"
                />
              </div>
              <div className="more-images-item bottom-up">
                <img
                  src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7%20(3).jpg?raw=true"
                  alt="thumbnail image"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="slide-control" className="slide-control">
          <Link to="/">
            <div className="slide-control-item ">
              <img
                src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/zoomx-vaporfly-next-running-shoe-4Q5jfG.png?raw=true"
                alt="thumbnail image"
              />
            </div>
          </Link>
          <Link to="/home_2">
            <div className="slide-control-item">
              <img
                src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/zoom-fly-3-mens-running-shoe-XhzpPH.png?raw=true"
                alt="thumbnail image"
              />
            </div>
          </Link>
          <Link to="home_3">
            <div className="slide-control-item">
              <img
                src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png?raw=true"
                alt="thumbnail image"
              />
            </div>
          </Link>
          <Link to="home_4">
            <div className="slide-control-item">
              <img
                src="https://github.com/trananhtuat/nike-shoes-landing-page/blob/main/assets/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW (1).png?raw=true"
                alt="thumbnail image"
              />
            </div>
          </Link>
        </div>
      </div>

      <div id="modal" className="modal">
        <span id="modal-close" className="close">
          &times;
        </span>
        <img id="modal-content" className="modal-content" />
        <div className="more-images">
          <div className="more-images-item">
            <img className="img-preview" />
          </div>
          <div className="more-images-item">
            <img className="img-preview" />
          </div>
          <div className="more-images-item">
            <img className="img-preview" />
          </div>
          <div className="more-images-item">
            <img className="img-preview" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
