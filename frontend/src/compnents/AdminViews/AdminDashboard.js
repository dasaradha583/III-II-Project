import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/adminDashboard.css";

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.userId;

    const handleReportsClick = () => {
        navigate("/admin/reports");
    };

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
                <div className="action-card settings-card">
                    <h2>Settings</h2>
                    <div className="settings-buttons">
                        <button>Profile Settings</button>
                        <button>System Settings</button>
                    </div>
                </div>
                <div className="action-card chart-card" onClick={handleReportsClick}>
                    <h2>Quick Reports</h2>
                    <div className="pie-chart-placeholder">
                        <span>📊 Click to view reports</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;