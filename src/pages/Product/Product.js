import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product-container">
      <div className="product-box">
        <header className="product-header">
          <h1>Our Imports/Products</h1>

          <p>
            Welcome to MTC We are a Nepal-based company, dedicated to importing
            top-quality goods from China to Nepal. As the authorized seller, we
            ensure you get the best products at competitive prices.
          </p>
        </header>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/TAT">
              <h2>TOWBARLESS AIRCRAFT TRACTORS</h2>
              <img src="\image\towbar3.jpeg" alt="" />
              <p>
                We specialize in importing a wide range of goods from China to
                Nepal, ensuring quality and timely delivery. Our extensive
                network and experience in the import business make us a reliable
                partner for your needs.
              </p>
            </Link>
          </div>
          <div className="product-item">
            <Link to="/product/BL">
              <h2>BELT LOADERS</h2>
              <img src="\image\Belt1.jpeg" alt="" />
              <p>
                As the authorized seller of Jojo Photo Paper in Nepal, we offer
                a variety of photo papers to meet your printing needs. Our
                products are known for their exceptional quality and durability,
                making them a preferred choice among professionals.
              </p>
            </Link>
          </div>
        </div>
        <div className="two-items">
          <div className="product-item">
            <Link to="/product/PS">
              <h2>Pax Steps</h2>
              <img src="\image\pax3.jpeg" alt="" />
              <p>
                We provide wholesale distribution services for various goods,
                including photo papers and other imported items. Our competitive
                pricing and efficient logistics ensure that you get the best
                value for your money.
              </p>
            </Link>
          </div>
          <div className="product-item">
            <Link to="/product/lavatory">
              <h2>LAVATORY AND WATER TRUCKS</h2>
              <img src="\image\potablewatertruck4.jpeg" alt="" />
              <p>
                Our dedicated customer support team is here to assist you with
                any queries or issues. We strive to provide prompt and effective
                solutions to ensure your satisfaction. We strive to provide
                prompt and effective .
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
