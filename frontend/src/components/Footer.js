import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer footer0"></div>
      <div className="footer footer1">
        <h5>Connect with us at</h5>
        <ul>
          <li>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer footer2">
        <ul>
          <h5>Products</h5>
          <li>
            <a href="">Sell Your Products</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Product Business</a>
          </li>
        </ul>

        <ul>
          <h5>Services</h5>
          <li>
            <a href="">Return</a>
          </li>
          <li>
            <a href="">Cashback</a>
          </li>
          <li>
            <a href="">Affiliate Marketing</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>

        <ul>
          <h5>Company</h5>
          <li>
            <a href="">Complaint</a>
          </li>
          <li>
            <a href="">Carriers</a>
          </li>
          <li>
            <a href="">Affiliate Marketing</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>

        <ul>
          <h5>Get Help</h5>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer footer3"></div>
    </div>
  );
};

export default Footer;
