import React from "react";
import { Link, NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    //Navigation Bar
    <div className="container">
      {/*Logo and Home */}
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#mainNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Items */}
      <div className="collapse navbar-collapse" id="mainNav">
        <div className="navbar-nav mr-auto">
          <a className="nav-item nav-link" href="#">
            About Us
          </a>
          <a className="nav-item nav-link" href="/search">
            Find A Tutor
          </a>
          <a className="nav-item nav-link" href="/signup">
            Become A Tutor
          </a>
          <a className="nav-item nav-link" href="#">
            Contact Us
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/signin">
            Login
          </a>
          <a className="nav-item nav-link" href="/signup">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignedOutLinks;
