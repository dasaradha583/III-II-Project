import React from "react";
import { useLocation } from "react-router-dom"; // To access the state

const HospitalDashboard = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <div>
            <h1>Hospital Dashboard</h1>
            <p>Welcome, Hospital!</p>
            <p>Your User ID: {userId}</p>
        </div>
    );
};

export default HospitalDashboard;