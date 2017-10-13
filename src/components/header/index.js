import React from "react";

import "./_header.scss";

const Header = () =>
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <a href="/" className="header-logo">
              Logo
            </a>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <a href="/">Home</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="/">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>;

export default Header;
