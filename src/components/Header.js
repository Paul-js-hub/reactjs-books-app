import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
      <ul className="nav">
        <li className="nav-item">
          <Link className="text-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/books">Books</Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/contacts">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="text-link" to="/login">Login</Link>
        </li>
      </ul>

);

export default Header;
