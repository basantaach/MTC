import React from "react";
import "./Achievement.css"; // Import your CSS file for styling
import { AiFillProduct } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";

function Achievement() {
  return (
    <div>
      <section className="achievements-section">
        <div className="container">
          <div className="heading">
            <h1 className="heading-text">Our Achievements </h1>
          </div>
          <div className="achievements-grid">
            <div className="achievement">
              <div className="details">
                <AiFillProduct className="logoAchievements" />
                <h4 className="achievement-title">Products</h4>
                <p className="achievement-count">6</p>
              </div>
            </div>
            <div className="achievement">
              <div className="details">
                <IoPersonCircleSharp className="logoAchievements" />
                <h4 className="achievement-title">Clients</h4>
                <p className="achievement-count">4</p>
              </div>
            </div>
            <div className="achievement">
              <div className="details">
                <CiTimer className="logoAchievements" />
                <h4 className="achievement-title">Hours Worked</h4>
                <p className="achievement-count">500</p>
              </div>
            </div>
            <div className="achievement">
              <div className="details">
                <FaListCheck className="logoAchievements" />
                <h4 className="achievement-title">Completed Projects</h4>
                <p className="achievement-count">40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievement;
