import React from "react";
import './navbar.css'

function Navbar(props){
    return(
        <nav className="navbar">
            <h2>{props.name}</h2>
            <h2 className="navbar-title"></h2>
            <ul className="nav-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar