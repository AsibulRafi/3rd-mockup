import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./style.css";
const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <input
          type="checkbox"
          id="show-menu"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fa-solid fa-bars" id="bar"></i>
        </label>
        <div className="logo">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <ul className="links" id="links">
            <li>
              <Link to="/about#us" className="desktop-link">
                ABOUT US
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">ABOUT US</label>
              <ul>
                <li>
                  <Link to="/about#us" onClick={() => setChecked(false)}>
                    About Us
                  </Link>
                  <Link to="/about#contact" onClick={() => setChecked(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/accounts" className="desktop-link">
                ACCOUNTS
              </Link>
              <input type="checkbox" id="show-accounts" />
              <label htmlFor="show-accounts">ACCOUNTS</label>
              <ul>
                <li>
                  <Link to="/accounts#types" onClick={() => setChecked(false)}>
                    Account types
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounts#funding"
                    onClick={() => setChecked(false)}
                  >
                    Account Funding
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/platforms" className="desktop-link">
                TRADING
              </Link>
              <input type="checkbox" id="show-platform" />
              <label htmlFor="show-platform">TRADING</label>
              <ul>
                <li>
                  <Link to="/platforms" onClick={() => setChecked(false)}>
                    Meta Trader
                  </Link>
                </li>
                <li>
                  <Link to="/platforms" onClick={() => setChecked(false)}>
                    Web Trader
                  </Link>
                </li>
                <li>
                  <Link to="/platforms" onClick={() => setChecked(false)}>
                    Mobile Trader
                  </Link>
                </li>
                <li>
                  <Link to="/cfd" onClick={() => setChecked(false)}>
                    CFD Trading
                  </Link>
                </li>
                <li>
                  <Link to="/forex" onClick={() => setChecked(false)}>
                    Forex
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/terms" className="desktop-link">
                RESOURCES
              </Link>
              <input type="checkbox" id="show-resources" />
              <label htmlFor="show-resources">RESOURCES</label>
              <ul>
                <li>
                  <Link to="/privacy" onClick={() => setChecked(false)}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={() => setChecked(false)}>
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/kyc" onClick={() => setChecked(false)}>
                    KYC Policy
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/trading" className="desktop-link">
                TOOLS
              </Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">TOOLS</label>
              <ul>
                <li>
                  <Link to="/spreads" onClick={() => setChecked(false)}>
                    Spreads and Trading Hours
                  </Link>
                </li>
                <li>
                  <Link to="/trading" onClick={() => setChecked(false)}>
                    Trading Glossary
                  </Link>
                </li>
                <li>
                  <Link to="/signals" onClick={() => setChecked(false)}>
                    Forex Signals
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={() => setChecked(false)}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <button className="header__oa-btn">Open Account</button>
              </a>
              <a href="/">
                <button className="header__lg-btn">Login</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
