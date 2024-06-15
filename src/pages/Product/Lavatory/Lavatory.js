import React from "react";
import "./Lavatory.css";
import { Link } from "react-router-dom";

function Lavatory() {
  return (
    <div className="product-container">
      <div className="product-box">
        <header className="product-header">
          <h1>Lavatory and Water Trucks</h1>

          <p>
            Lavatory and Water Trucks are essential ground support vehicles for
            aircraft. They service lavatories and supply potable water, ensuring
            passenger comfort and operational efficiency at airports worldwide.
          </p>
        </header>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/lavatory/COBUS">
              <h2>COBUS Aircraft Ramp Bus</h2>
              <img src="\image\COBUS3.jpeg" alt="" />
              <p>
                The COBUS Aircraft Ramp Bus is a specialized vehicle designed
                for transporting passengers between the terminal and aircraft.
                It ensures efficient boarding and disembarking processes,
                enhancing airport operational flow.
              </p>
            </Link>
          </div>

          <div className="product-item">
            <Link to="/product/lavatory/Portable">
              <h2>Potable Water Truck</h2>
              <img src="\image\potablewatertruck4.jpeg" alt="" />
              <p>
                A Potable Water Truck is a specialized ground support vehicle
                used to supply clean and safe drinking water to aircraft. It
                ensures hygiene and comfort for passengers and crew during
                flights, equipped with high-pressure pumps and food-grade hoses.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lavatory;
