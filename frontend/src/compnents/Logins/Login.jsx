import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
    const [activeTab, setActiveTab] = useState("donor");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
            role: activeTab,
        };

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);

                if (data.role === "donor") {
                    navigate("/donor-dashboard", { state: { userData: data } });
                } else if (data.role === "admin") {
                    navigate("/admin-dashboard", { state: { userId: data.userId } });
                } else if (data.role === "hospital") {
                    navigate("/hospital-dashboard", { state: { hospitalData: data } });
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <section className="login-section">
            <div className="login-container">
                <h2 className="text-center mb-4">Blood Bank System</h2>
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

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </button>
                </form>

                {/* Conditional Sign Up link - only shown for donor and hospital tabs */}
                {activeTab !== "admin" && (
                    <p className="text-center mt-3">
                        New {activeTab}? <a href={`/signup-${activeTab}`}>Sign Up</a>
                    </p>
                )}

                {/* Forgot Password link */}
                <p className="text-center mt-2">
                    <a href="/reset-password">Forgot Password?</a>
                </p>

                {error && <p className="text-danger text-center mt-3">{error}</p>}
            </div>
        </section>
    );
};

export default Login;