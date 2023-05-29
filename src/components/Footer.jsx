import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <h4 className="footer__section-heading">About</h4>
            <ul className="footer__list">
              <li>
                <a href="https://portfolio-arin.netlify.app/">About Us</a>
              </li>
              <li>
                <a href="https://portfolio-arin.netlify.app/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-heading">Help & Support</h4>
            <ul className="footer__list">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-heading">Social</h4>
            <ul className="footer__list">
              <li>
                <a href="https://www.facebook.com/paliwal.arin">Facebook</a>
              </li>
              <li>
                <a href="https://github.com/arin-paliwal">Github</a>
              </li>
              <li>
                <a href="https://www.instagram.com/arin.paliwal">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 Cinematic. All rights reserved.</p>
          <p>Created by Arin Paliwal</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
