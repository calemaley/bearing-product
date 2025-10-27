// src/services/api.js
const BASE = import.meta.env.VITE_API_BASE_URL || "/api";

async function postGenerate(payload) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || `API error: ${res.status}`);
  }
  return res.json();
}

async function search(q) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(q)}`);
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || `API error: ${res.status}`);
  }
  return res.json();
}

export default { postGenerate, search };
