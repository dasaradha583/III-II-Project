import React from "react";
import "./css/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-brand">Blood Bank Management System</h1>
            </div>
            <div className="navbar-right">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#login" className="nav-link">Login</a>
                <a href="#contact" className="nav-link">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;