import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./header.css";

const Header = () => (
  <Router>
    <ul className="nav">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">About</li>
      <li className="nav-item">Books</li>
      <li className="nav-item">Contact</li>
      <li className="nav-item">
        <Link to="/register">Register</Link>
      </li>
      <li className="nav-item">Sign in</li>
    </ul>
  </Router>
);

export default Header;
