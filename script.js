// install express dan node-fetch
// npm install express node-fetch

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/download", async (req, res) => {
  const { url } = req.body;
  try {
    const result = await fetch(`https://api.tikwm.com/api/?url=${encodeURIComponent(url)}`);
    const data = await result.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Gagal mengambil data dari Tikwm" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
