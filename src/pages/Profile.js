import React from "react";

function Profile() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <input className="border w-full mb-2 p-2" placeholder="Name" />
      <input className="border w-full mb-2 p-2" placeholder="Department" />
      <button className="bg-blue-600 text-white px-4 py-2">Save</button>
    </div>
  );
}

export default Profile;