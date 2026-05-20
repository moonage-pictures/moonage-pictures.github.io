import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavbarOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main-naivagation">
      <div className="navbar-brand">
        <a
          className={`navbar-burger${navbarOpen ? " is-active" : ""}`}
          role="button"
          href="#menu"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={`navbar-menu${navbarOpen ? " is-active" : ""}`}>
        <div className="navbar-end">
          <Link
            to="/company"
            className={`navbar-item company-nav ${
              location.pathname === "/company" ? "company-active" : ""
            }`}
          >
            Company
          </Link>
          <Link
            to="/news"
            className={`navbar-item news-nav ${
              location.pathname === "/news" ? "news-active" : ""
            }`}
          >
            News
          </Link>
          <Link
            to="/shows"
            className={`navbar-item shows-nav ${
              location.pathname === "/shows" || location.pathname.includes('/shows/') ? "shows-active" : ""
            }`}
          >
            Shows
          </Link>
          <Link
            to="/people"
            className={`navbar-item people-nav ${
              location.pathname === "/people" ? "people-active" : ""
            }`}
          >
            People
          </Link>
          <Link
            to="/daydream"
            className={`navbar-item daydream-nav ${
              location.pathname === "/daydream" ? "daydream-active" : ""
            }`}
          >
            Daydream
          </Link>
          <Link
            to="/contact"
            className={`navbar-item contact-nav ${
              location.pathname === "/contact" ? "contact-active" : ""
            }`}
          >
            Contact
          </Link>
          <Link to="/">
            <img
              src={logo}
              className="navbar-logo"
              alt="Moonage Pictures Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
