import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  // 🔐 Role-based access check
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      navigate("/dashboard"); // block students
    }
  }, []);

  const [announcements, setAnnouncements] = useState([
    { message: "Welcome to the portal", date: "2025-05-13" },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const tickets = [
    { id: "#1", type: "Academic", status: "Open" },
    { id: "#2", type: "Technical", status: "Closed" },
    { id: "#3", type: "Hostel", status: "Open" },
  ];

  const handlePostAnnouncement = () => {
    if (!newAnnouncement.trim()) return;
    const today = new Date().toISOString().split("T")[0];
    setAnnouncements([
      ...announcements,
      { message: newAnnouncement, date: today },
    ]);
    setNewAnnouncement("");
  };

  const handleDeleteAnnouncement = (index) => {
    const confirmDelete = window.confirm("Delete this announcement?");
    if (confirmDelete) {
      const updated = [...announcements];
      updated.splice(index, 1);
      setAnnouncements(updated);
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // clear role
    navigate("/login");
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title + Logout */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">🛠️ Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Manage Support Requests */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">🎫 Manage Support Requests</h3>
        <table className="min-w-full border text-sm shadow-sm rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Ticket ID</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-t hover:bg-gray-50">
                <td className="border px-4 py-2">{ticket.id}</td>
                <td className="border px-4 py-2">{ticket.type}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      ticket.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  {ticket.status === "Open" ? (
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                      Close
                    </button>
                  ) : (
                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                      Reopen
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Announcements */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">📢 Announcements</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="New announcement..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handlePostAnnouncement}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
        <ul className="mt-4 list-disc list-inside">
          {announcements.map((a, i) => (
            <li key={i} className="mb-2">
              {a.message}{" "}
              <span className="text-xs text-gray-500">({a.date})</span>
              <button
                onClick={() => handleDeleteAnnouncement(i)}
                className="ml-3 text-red-500 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Report Summary */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">📊 Report Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded shadow text-center">
            <h4 className="font-semibold">Total Tickets</h4>
            <p className="text-2xl font-bold">{tickets.length}</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow text-center">
            <h4 className="font-semibold">Open</h4>
            <p className="text-2xl font-bold">
              {tickets.filter((t) => t.status === "Open").length}
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow text-center">
            <h4 className="font-semibold">Closed</h4>
            <p className="text-2xl font-bold">
              {tickets.filter((t) => t.status === "Closed").length}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
