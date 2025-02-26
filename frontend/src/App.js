import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import DonorNavbar from "./compnents/DonorViews/DonarNavbar";
import AdminNavbar from "./compnents/AdminViews/AdminNavbar";
import HospitalNavbar from "./compnents/HospitalViews/HospitalNavbar";
import Navbar from "./compnents/Navbar";
import HeroSection from "./compnents/HeroSection";
import Login from "./compnents/Logins/Login";
import DonorDashboard from "./compnents/DonorViews/DonorDashboard";
import AdminDashboard from "./compnents/AdminViews/AdminDashboard";
import HospitalDashboard from "./compnents/HospitalViews/HosptialDashboard";
import Footer from "./compnents/Footer";

function App() {
    const location = useLocation(); // Get the current route

    // Function to determine which navbar to render
    const renderNavbar = () => {
        if (location.pathname.startsWith("/donor-dashboard")) {
            return <DonorNavbar />;
        } else if (location.pathname.startsWith("/admin-dashboard")) {
            return <AdminNavbar />;
        } else if (location.pathname.startsWith("/hospital-dashboard")) {
            return <HospitalNavbar />;
        } else {
            return <Navbar />; // Default navbar for home and login pages
        }
    };

    // Function to handle logout when the app is closed or refreshed
    const handleLogout = async () => {
        try {
            await fetch("http://localhost:8080/logout", {
                method: "POST",
                credentials: "include", // Include cookies in the request
            });
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Error during logout:", err);
        }
    };

    // Add event listener for beforeunload
    useEffect(() => {
        window.addEventListener("beforeunload", handleLogout);
        return () => {
            window.removeEventListener("beforeunload", handleLogout);
        };
    }, []);

    return (
        <div className="App">
            {renderNavbar()} {/* Render the appropriate navbar */}
            <Routes>
                {/* Default route for the home page */}
                <Route path="/" element={<HeroSection />} />

                {/* Route for the login page */}
                <Route path="/login" element={<Login />} />

                {/* Route for the Donor Dashboard */}
                <Route path="/donor-dashboard" element={<DonorDashboard />} />

                {/* Route for the Admin Dashboard */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />

                {/* Route for the Hospital Dashboard */}
                <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}