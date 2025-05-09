import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-10 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mb-3"
      >
        <option>Student</option>
        <option>Admin</option>
      </select>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="mb-3"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded"
      >
        Login
      </button>

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
