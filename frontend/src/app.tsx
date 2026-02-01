import React, { useState } from "react";

export default function App() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [msg, setMsg] = useState("");

  async function login() {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: u, password: p }),
      });

      if (!res.ok) {
        setMsg("❌ Login failed");
        return;
      }

      // Success screen
      document.body.innerHTML = `
        <h1>✅ Store 3729 Connected</h1>
        <p>Inventory system is live.</p>
      `;
    } catch {
      setMsg("Network error");
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: "system-ui" }}>
      <h2>Store 3729 Inventory</h2>

      <input
        placeholder="Username"
        onChange={(e) => setU(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setP(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>

      <div>{msg}</div>
    </div>
  );
}
