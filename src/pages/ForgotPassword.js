import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-10 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        className="mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Send Reset Link</button>
    </div>
  );
}

export default ForgotPassword;
