import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footerHeader">Contact Us</h3>
          <p>Mater Trading Company Pvt. Ltd.</p>
          <p>Kathmandu, Nepal</p>
          <p>Phone: +977-9863551274</p>
          <p>Email: matertrading@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3 className="footerHeader">Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footerHeader">Follow Us</h3>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100089243324210"
                className="social-link"
              >
                <FaFacebookF className="social-icon" />
                <span className="social-text">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="social-link">
                <FaTwitter className="social-icon" />{" "}
                {/* Font Awesome Twitter icon */}
                <span className="social-text">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="social-link">
                <FaInstagram className="social-icon" />{" "}
                {/* Font Awesome Instagram icon */}
                <span className="social-text">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="social-link">
                <FaLinkedinIn className="social-icon" />{" "}
                {/* Font Awesome LinkedIn icon */}
                <span className="social-text">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Mater Trading Company Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
