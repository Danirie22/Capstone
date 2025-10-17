import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img className="logo-image" src="/src/assets/img/image1.png" alt="Blue Grounds Coffee Logo" />
            <div className="logo-text">
              <h3 className="logo-title">BLUE GROUNDS</h3>
              <h4 className="logo-subtitle">COFFEE</h4>
            </div>
          </div>
          <p className="footer-description">
            Welcome to Blue Grounds Coffee. We believe great coffee should be accessible to everyone. At Blue Grounds, every cup is brewed with passion, using premium beans and crafted for everyday indulgence—without breaking the bank. Thank you for making us part of your daily grind.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="/src/assets/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="/src/assets/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="/src/assets/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="/src/assets/img/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">Categories</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Coffee</a></li>
              <li><a href="#" className="footer-link">Chocolate</a></li>
              <li><a href="#" className="footer-link">Fruit Teas</a></li>
              <li><a href="#" className="footer-link">Matcha & Milktea</a></li>
              <li><a href="#" className="footer-link">Extras</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Shopping</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Payments</a></li>
              <li><a href="#" className="footer-link">Queueing</a></li>
              <li><a href="#" className="footer-link">Buyer protection</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Customer care</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Help center</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy policy</a></li>
              <li><a href="#" className="footer-link">Returns & refund</a></li>
              <li><a href="#" className="footer-link">Survey & feedback</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Pages</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">Profile</a></li>
              <li><a href="#" className="footer-link">Cart</a></li>
              <li><a href="#" className="footer-link">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="copyright">
          
          <p className="copyright-text">© 2025 Blue Grounds Coffee. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;