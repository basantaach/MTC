import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div style={{ backgroundColor: "rgb(245,245,247" }}>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* <span>CodeBucks</span> */}
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <img src="/image/file.png" alt="logo" />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Imports/Products
              </NavLink>
              {/* <div className="dropdown-content">
                <NavLink
                  to="/products/product1"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  Tow Tractor
                </NavLink>
                <NavLink
                  to="/products/product2"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  Aircraft
                </NavLink>
                <NavLink
                  to="/products/product3"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  Aircraft Potable Water Truck
                </NavLink>
                <NavLink
                  to="/products/product3"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  <NavLink
                    to="/products/product3"
                    className="dropdown-item"
                    onClick={handleClick}
                  >
                    TLD CAB 304-2
                  </NavLink>
                </NavLink>
              </div>*/}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                // to="/expo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Airshow Expo/Exhibition
              </NavLink>
              <div className="dropdown-content">
                <NavLink
                  to="/airshow/singapore2024"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  Singapore 2024
                </NavLink>
                <NavLink
                  to="/airshow/dubai2023"
                  className="dropdown-item"
                  onClick={handleClick}
                >
                  Dubai 2023
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
