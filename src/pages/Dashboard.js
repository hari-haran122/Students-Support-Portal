import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const openTickets = 3;
  const closedTickets = 2;
  const totalTickets = openTickets + closedTickets;
  const announcements = [
    "Maintenance on Saturday (9AM–12PM)",
    "New exam rules have been updated.",
  ];

  const user = {
    name: "Hariharan",
    department: "CSE",
    year: "3rd Year",
    profilePhoto: "/default-avatar.png",
  };

  const recentTickets = [
    { id: "#1", type: "Academic", status: "Open", priority: "High" },
    { id: "#2", type: "Technical", status: "Closed", priority: "Medium" },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* User Info and Logout */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-14 h-14 rounded-full border"
          />
          <div>
            <h3 className="text-lg font-bold">Welcome, {user.name}</h3>
            <p className="text-sm text-gray-600">
              Department: {user.department} • {user.year}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Ticket Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">🟢 Open Tickets</h3>
          <p className="text-xl">{openTickets}</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">🔴 Closed Tickets</h3>
          <p className="text-xl">{closedTickets}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">📦 Total Tickets</h3>
          <p className="text-xl">{totalTickets}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">⚙️ In Progress</h3>
          <p className="text-xl">0</p>
        </div>
      </div>

      {/* Announcements */}
      {announcements.map((note, i) => (
        <div
          key={i}
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded mb-2"
        >
          ⚠ {note}
        </div>
      ))}

      {/* Recent Tickets Table */}
      <h3 className="text-xl font-semibold mt-6 mb-3">📑 Recent Tickets</h3>
      <table className="w-full border rounded text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Status</th>
            <th className="p-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {recentTickets.map((ticket) => (
            <tr key={ticket.id} className="border-t">
              <td className="p-2">{ticket.id}</td>
              <td className="p-2">{ticket.type}</td>
              <td className="p-2">{ticket.status}</td>
              <td className="p-2">{ticket.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
