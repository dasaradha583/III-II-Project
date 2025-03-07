import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-brand">Blood Bank Management System</h1>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;