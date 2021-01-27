import React from "react";
import { Link } from "react-router-dom";
import "./moviefiles/CardStyle.css";

function NavBar(props) {
  const navbarLinks = props.tabs
    .filter(curval => curval.isLink)
    .map((curval, index) => (
      <li key={index}>
        <Link to={curval.url} className="nav-link">
          {curval.pageHead}
        </Link>
      </li>
    ));
  return (
    <nav
      id="navId"
      className="navbar navbar-dark navbar-expand-lg text-light fixed-top"
    >
      <Link to="/" className="navbar-brand ">
        MovieDetails
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">{navbarLinks}</div>
      </div>
    </nav>
  );
}

export default NavBar;
