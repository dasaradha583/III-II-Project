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
import ContactUs from "./compnents/ContactUs"; // Import ContactUs component
import Footer from "./compnents/Footer";

function App() {
    const location = useLocation();

    const renderNavbar = () => {
        if (location.pathname.startsWith("/donor-dashboard")) {
            return <DonorNavbar />;
        } else if (location.pathname.startsWith("/admin-dashboard")) {
            return <AdminNavbar />;
        } else if (location.pathname.startsWith("/hospital-dashboard")) {
            return <HospitalNavbar />;
        } else {
            return <Navbar />;
        }
    };

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:8080/logout", {
                method: "POST",
                credentials: "include",
            });
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Error during logout:", err);
        }
    };

    useEffect(() => {
        window.addEventListener("beforeunload", handleLogout);
        return () => {
            window.removeEventListener("beforeunload", handleLogout);
        };
    }, []);

    return (
        <div className="App">
            {renderNavbar()}
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/donor-dashboard" element={<DonorDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
                <Route path="/contact" element={<ContactUs />} /> {/* Add route for ContactUs */}
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