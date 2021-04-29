import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function register() {
  return (
    <div>
      <h1 className="text-center  mt-5">Register Here</h1>
      <div className="contact d-flex mt-5 justify-content-center">
        <form className="d-flex  form flex-column ">
          <div className="form-group row">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group row">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="passsword"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group row">
            <label for="exampleInputEmail1">Confirm Password</label>
            <input
              type="passsword"
              className="form-control"
              placeholder="Enter your password again"
            />
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <Link to="home">
                <button type="submit" className="btn ml-2 btn-secondary">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
