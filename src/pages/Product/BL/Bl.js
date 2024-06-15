import React from "react";
import "./Bl.css";
import { Link } from "react-router-dom";

function Bl() {
  return (
    <div className="product-container">
      <div className="product-box">
        <header className="product-header">
          <h1>Belt Loaders</h1>

          <p>
            Belt loaders are ground support equipment used at airports to load
            and unload baggage and cargo from aircraft. They typically consist
            of a conveyor belt mounted on a vehicle chassis that can be adjusted
            in height to reach the cargo holds of different aircraft types.
          </p>
        </header>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/BL/NBL">
              <h2>NBL</h2>
              <img src="\image\Belt3.jpeg" alt="" />
              <p>
                NBL can refer to "Narrow Body Aircraft," which are aircraft with
                a single aisle. They are generally used for shorter to
                medium-haul flights and are characterized by their smaller size
                compared to wide-body aircraft.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bl;
