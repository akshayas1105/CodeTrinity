import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AuthorityDashboard from "../pages/AuthorityDashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<AuthorityDashboard />} />
        </Routes>
    );
};

export default AppRoutes;
