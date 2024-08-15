import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo2 from "../../Assets/Logo2.svg";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <nav className="navbar navbar-expand-lg navbar-light bgdark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img style={{ maxWidth: "65px" }} src={Logo2} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link " to="/about" tabIndex="-1">
                About
              </Link>
              <Link className="nav-link" to="/blog">
                Blogs
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
