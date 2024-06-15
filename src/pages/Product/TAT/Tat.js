import React from "react";
import "./Tat.css";
import { Link } from "react-router-dom";

function Tat() {
  return (
    <div className="product-container">
      <div className="product-box">
        <header className="product-header">
          <h1>TOWBARLESS AIRCRAFT TRACTORS</h1>

          <p>
            Towbarless aircraft tractors are specialized vehicles used for
            maneuvering airplanes without the need for a towbar. They provide
            efficient and safe towing operations, enhancing ground handling
            procedures at airports worldwide.
          </p>
        </header>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/TAT/TMX450">
              <h2>TMX450</h2>
              <img src="\image\tmx1.jpeg" alt="" />
              <p>
                The TMX450 is a robust towbarless aircraft tractor, facilitating
                efficient ground handling. It enhances operational safety and
                productivity at airports, designed for ease of use and
                reliability in various aircraft towing tasks.
              </p>
            </Link>
          </div>

          <div className="product-item">
            <Link to="/product/TAT/Towbarless">
              <h2>Towbarless</h2>
              <img src="\image\towbar3.jpeg" alt="" />
              <p>
                A towbarless aircraft tractor eliminates the need for
                traditional towbars, streamlining ground operations by directly
                lifting and moving aircraft. It enhances efficiency and reduces
                turnaround times during aircraft handling.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tat;
