import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitRequest from "./pages/SubmitRequest";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <span className="font-bold">SSP</span>
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/submit">Submit Request</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitRequest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>

      <footer className="text-center text-gray-500 text-sm p-4 mt-8 border-t">
        © 2025 Student Support Portal. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;