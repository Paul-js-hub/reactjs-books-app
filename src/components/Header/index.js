import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
  <div>
    <nav className="sidebar-navigation">
      <div id="menuToggle">
        <input type="checkbox"></input>

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/books">
            <li>BOOKS</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
          <Link to="/register">
            <li>REGISTER</li>
          </Link>
          <Link to="/login">
            <li>LOGIN</li>
          </Link>
        </ul>
      </div>
    </nav>
    <div id="main" className="header-container">
        <li className="nav-item">
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/books">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/contacts">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/login">
            Login
          </Link>
        </li>
    </div>
  </div>
);

export default Header;
