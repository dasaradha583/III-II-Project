import React from "react";
import { useLocation } from "react-router-dom"; // To access the state

const AdminDashboard = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
            <p>Your User ID: {userId}</p>
        </div>
    );
};

export default AdminDashboard;