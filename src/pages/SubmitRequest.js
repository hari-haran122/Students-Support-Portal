import React, { useState } from "react";

function SubmitRequest() {
  // Define who reviews each type of request
  const reviewers = {
    Hostel: "Hostel Warden",
    Technical: "Technician",
    Academic: "Faculty Advisor",
    Exam: "Exam Cell Admin",
    Other: "General Admin",
  };

  // State for the form
  const [form, setForm] = useState({
    type: "Academic",
    priority: "Low",
    description: "",
    file: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const reviewer = reviewers[form.type];
    alert(
      `✅ Request Submitted!\\nType: ${form.type}\\nPriority: ${form.priority}\\nForwarded To: ${reviewer}`
    );

    // You can later post this to backend via fetch/axios
    // Example:
    // const formData = new FormData();
    // formData.append("type", form.type);
    // formData.append("priority", form.priority);
    // formData.append("description", form.description);
    // formData.append("file", form.file);
    // fetch("/api/submit-request", { method: "POST", body: formData });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit a Support Request</h2>

      {/* Request Type Dropdown */}
      <label className="block mb-1 font-medium">Request Type</label>
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      >
        <option value="Academic">Academic</option>
        <option value="Technical">Technical</option>
        <option value="Hostel">Hostel</option>
        <option value="Exam">Exam</option>
        <option value="Other">Other</option>
      </select>

      {/* Reviewer Display */}
      <label className="block mb-1 font-medium">Forward To</label>
      <input
        type="text"
        readOnly
        value={reviewers[form.type]}
        className="border w-full p-2 mb-3 rounded bg-gray-100 text-gray-700"
      />

      {/* Priority Dropdown */}
      <label className="block mb-1 font-medium">Priority</label>
      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className={`border w-full p-2 mb-3 rounded ${
          form.priority === "High"
            ? "border-red-500"
            : form.priority === "Medium"
            ? "border-yellow-500"
            : "border-green-500"
        }`}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Description Textarea */}
      <label className="block mb-1 font-medium">Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Describe your issue in detail..."
        className="border w-full p-2 mb-3 rounded resize-y min-h-[120px]"
      />

      {/* File Upload */}
      <label className="block mb-1 font-medium">Attach File (optional)</label>
      <input
        type="file"
        name="file"
        onChange={handleChange}
        accept=".jpg,.jpeg,.png,.pdf,.docx"
        className="mb-4"
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 w-full rounded"
      >
        Submit Request
      </button>
    </div>
  );
}

export default SubmitRequest;
