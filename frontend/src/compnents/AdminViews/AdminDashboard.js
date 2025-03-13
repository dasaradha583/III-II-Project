import React from "react";
import { useLocation } from "react-router-dom";
import "../css/adminDashboard.css";

const AdminDashboard = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
            <p>Your User ID: {userId}</p>
            <div className="admin-actions">
                <div className="action-card">
                    <h2>Manage Users</h2>
                    <button>View Users</button>
                    <button>Add User</button>
                    <button>Edit User</button>
                    <button>Delete User</button>
                </div>
                <div className="action-card">
                    <h2>View Reports</h2>
                    <button>Daily Reports</button>
                    <button>Monthly Reports</button>
                    <button>Annual Reports</button>
                </div>
                <div className="action-card">
                    <h2>Settings</h2>
                    <button>Profile Settings</button>
                    <button>System Settings</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;