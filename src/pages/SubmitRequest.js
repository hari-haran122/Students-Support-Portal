import React from "react";

function SubmitRequest() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Submit a Support Request</h2>
      <select className="border w-full p-2 mb-2">
        <option>Academic</option>
        <option>Technical</option>
        <option>Other</option>
      </select>
      <select className="border w-full p-2 mb-2">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <textarea className="border w-full p-2 mb-2" placeholder="Describe your issue..." />
      <button className="bg-green-600 text-white px-4 py-2">Submit</button>
    </div>
  );
}

export default SubmitRequest;