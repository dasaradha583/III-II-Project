import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../css/login.css";

const Login = () => {
    const [activeTab, setActiveTab] = useState("donor"); // State to manage active tab
    const [email, setEmail] = useState(""); // State to store email
    const [password, setPassword] = useState(""); // State to store password
    const [error, setError] = useState(""); // State to store error messages
    const navigate = useNavigate(); // For navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Prepare the data to send to the backend
        const loginData = {
            email,
            password,
            role: activeTab, // Include the role (donor, admin, hospital)
        };

        try {
            // Send a POST request to the Spring Boot backend
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json(); // Parse the JSON response
                console.log("Login successful:", data);

                // Redirect based on the role and pass the user ID
                if (data.role === "donor") {
                    navigate("/donor-dashboard", { state: { userId: data.userId } }); // Redirect to Donor Dashboard
                } else if (data.role === "admin") {
                    navigate("/admin-dashboard", { state: { userId: data.userId } }); // Redirect to Admin Dashboard
                } else if (data.role === "hospital") {
                    navigate("/hospital-dashboard", { state: { userId: data.userId } }); // Redirect to Hospital Dashboard
                }
            } else {
                const errorData = await response.json(); // Parse the error response
                setError(errorData.message || "Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <section className="login-section d-flex align-items-center justify-content-center">
            <div className="login-container">
                <h2 className="text-center mb-4">Login</h2>
                <div className="tabs mb-4">
                    <button
                        className={`tab-button ${activeTab === "donor" ? "active" : ""}`}
                        onClick={() => setActiveTab("donor")}
                    >
                        Donor
                    </button>
                    <button
                        className={`tab-button ${activeTab === "admin" ? "active" : ""}`}
                        onClick={() => setActiveTab("admin")}
                    >
                        Admin
                    </button>
                    <button
                        className={`tab-button ${activeTab === "hospital" ? "active" : ""}`}
                        onClick={() => setActiveTab("hospital")}
                    >
                        Hospital
                    </button>
                </div>

                {/* Donor Login Form */}
                {activeTab === "donor" && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="donorEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="donorEmail"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="donorPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="donorPassword"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login as Donor
                        </button>
                        <p className="text-center mt-3">
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                        <p className="text-center mt-2">
                            <a href="/reset-password">Forgot Password?</a> {/* Reset Password link */}
                        </p>
                    </form>
                )}

                {/* Admin Login Form */}
                {activeTab === "admin" && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="adminEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="adminEmail"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="adminPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="adminPassword"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login as Admin
                        </button>
                    </form>
                )}

                {/* Hospital Login Form */}
                {activeTab === "hospital" && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="hospitalEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="hospitalEmail"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hospitalPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="hospitalPassword"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login as Hospital
                        </button>
                    </form>
                )}

                {/* Display error messages */}
                {error && <p className="text-danger text-center mt-3">{error}</p>}
            </div>
        </section>
    );
};

export default Login;