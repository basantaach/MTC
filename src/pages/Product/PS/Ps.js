import React from "react";
import "./Ps.css";
import { Link } from "react-router-dom";

function Ps() {
  return (
    <div className="product-container">
      <div className="product-box">
        <header className="product-header">
          <h1>PAX STEPS</h1>

          <p>
            PAX steps, short for passenger steps, are movable staircases used to
            bridge the gap between an aircraft door and the ground. They
            facilitate safe boarding and disembarkation of passengers,
            particularly in locations without fixed jet bridges.
          </p>
        </header>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/Ps/Pax">
              <h2>Passenger Steps</h2>
              <img src="\image\pax2.jpeg" alt="" />
              <p>
                Passenger Steps, also known as aircraft boarding stairs or
                passenger boarding bridges, are portable staircases used to
                provide safe access for passengers between an aircraft and the
                ground at airports without jet bridges or when remote parking
                positions are used.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ps;
