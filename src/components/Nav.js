import React from "react"
import logo from "../img/Logo.svg";

const Nav = () => {
    return  (
        <nav>
            <img src={logo} alt="Little Lemon logo" width="150" />
            <ul>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order online</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#home">Home</a></li>
            </ul>
        </nav>
    );
};

export default Nav;