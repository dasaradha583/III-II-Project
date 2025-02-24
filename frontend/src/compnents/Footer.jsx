import React from "react";
import "./css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Blood Bank Management System. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;