import React from "react";
import { useLocation } from "react-router-dom"; // To access the state

const DonorDashboard = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <div>
            <h1>Donor Dashboard</h1>
            <p>Welcome, Donor!</p>
            <p>Your User ID: {userId}</p>
        </div>
    );
};

export default DonorDashboard;