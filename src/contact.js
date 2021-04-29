import React from "react";
import Navbar from "./navbar";

function contact() {
  return (
    <div className="contact">
      <Navbar />
      <h1 className="text-center  mt-5">Contact Page</h1>
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
            <label for="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group row">
            <label for="exampleInputEmail1">Leave us message</label>
            <input
              type="message"
              className="form-control"
              placeholder="Enter your message"
            />
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contact;
