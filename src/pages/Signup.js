import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    alert(`Account created!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-10 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>

      <input
        type="text"
        placeholder="Name"
        className="mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
