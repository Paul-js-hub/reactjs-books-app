import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css"

const SideBar = () =>(
    <nav className="sidebar-navigation">
        <div id="menuToggle">
            <input type="checkbox"></input>

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/books"><li>BOOKS</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
                <Link to="/register"><li>REGISTER</li></Link>
                <Link to="/login"><li>LOGIN</li></Link>
            </ul>
        </div>
    </nav>
);

export default SideBar