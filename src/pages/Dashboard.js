import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // If using auth logic later, clear session/localStorage here
    navigate("/login");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">🟢 Open Tickets</h3>
          <p className="text-xl">3</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">🔴 Closed Tickets</h3>
          <p className="text-xl">2</p>
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-4">
        ⚠ <strong>Upcoming:</strong> Maintenance on Saturday (9AM–12PM)
      </div>

      <h2 className="text-xl font-bold mb-2">My Tickets</h2>
      <ul className="list-disc list-inside">
        <li>#1 [Academic] - Open</li>
        <li>#2 [Technical] - Closed</li>
      </ul>
    </div>
  );
}

export default Dashboard;
