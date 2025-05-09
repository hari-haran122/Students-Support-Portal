import React from "react";

function Admin() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">🎫 Manage Support Requests</h3>
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Ticket ID</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">#1</td>
              <td className="border px-4 py-2">Academic</td>
              <td className="border px-4 py-2">Open</td>
              <td className="border px-4 py-2"><button className="bg-yellow-500 text-white px-2 py-1 rounded">Close</button></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">#2</td>
              <td className="border px-4 py-2">Technical</td>
              <td className="border px-4 py-2">Closed</td>
              <td className="border px-4 py-2"><button className="bg-green-500 text-white px-2 py-1 rounded">Reopen</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">📢 Announcements</h3>
        <input type="text" placeholder="New announcement..." className="border rounded p-2 w-full mb-2" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
        <ul className="mt-4 list-disc list-inside">
          <li>Welcome to the portal <button className="ml-2 text-red-500">Delete</button></li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">📊 Report Summary</h3>
        <p>Total Tickets: 5</p>
        <p>Open: 3 | Closed: 2</p>
      </section>
    </div>
  );
}

export default Admin;