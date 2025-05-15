import React, { useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSave = () => {
    alert(
      `Saved!\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDepartment: ${form.department}\nYear: ${form.year}`
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">My Profile</h2>

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleChange}
        className="mb-3 w-full"
      />

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border w-full mb-2 p-2 rounded"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border w-full mb-2 p-2 rounded"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="border w-full mb-2 p-2 rounded"
      />

      <select
        name="department"
        value={form.department}
        onChange={handleChange}
        className="border w-full mb-2 p-2 rounded"
      >
        <option value="">Select Department</option>
        <option value="AIDS">AIDS</option>
        <option value="IT">IT</option>
        <option value="ECE">ECE</option>
        <option value="CSE">CSE</option>
        <option value="CIVIL">CIVIL</option>
        <option value="MECH">MECH</option>
        <option value="CSD">CDS</option>
        <option value="CST">CT</option>
        <option value="MBA">MBA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        name="year"
        value={form.year}
        onChange={handleChange}
        className="border w-full mb-4 p-2 rounded"
      >
        <option value="">Select Year</option>
        <option value="1st Year">1st Year</option>
        <option value="2nd Year">2nd Year</option>
        <option value="3rd Year">3rd Year</option>
        <option value="4th Year">4th Year</option>
      </select>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Save
      </button>
    </div>
  );
}

export default Profile;
