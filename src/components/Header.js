import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src="/images/logo.svg" alt="Insure logo" className="logo" />
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#">How we work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#" className="btn">View plans</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
