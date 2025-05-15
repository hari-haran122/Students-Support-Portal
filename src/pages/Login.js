import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save role and username in localStorage
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-10 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      {/* Role Dropdown */}
      <label className="block mb-1 font-medium">Login as</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mb-3 w-full border p-2 rounded"
      >
        <option>Student</option>
        <option>Admin</option>
      </select>

      {/* Username Input */}
      <label className="block mb-1 font-medium">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="mb-3 w-full border p-2 rounded"
      />

      {/* Password Input */}
      <label className="block mb-1 font-medium">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="mb-4 w-full border p-2 rounded"
      />

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded"
      >
        Login
      </button>

      {/* Links */}
      <div className="text-center mt-4 text-sm">
        <p>
          <Link to="/signup" className="text-blue-600 underline">
            Create an account
          </Link>
        </p>
        <p>
          <Link to="/forgot" className="text-blue-600 underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
