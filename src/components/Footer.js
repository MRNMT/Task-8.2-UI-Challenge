import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/logo.svg" alt="Insure logo" className="footer-logo" />
        <div className="social-icons">
          <img src="/images/icon-facebook.svg" alt="Facebook" />
          <img src="/images/icon-twitter.svg" alt="Twitter" />
          <img src="/images/icon-instagram.svg" alt="Instagram" />
        </div>
        <div className="footer-columns">
          <div>
            <h4>Our company</h4>
            <ul>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Why Insure?</a></li>
              <li><a href="#">View plans</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4>Help me</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Live chat</a></li>
            </ul>
          </div>
          <div>
            <h4>Others</h4>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
