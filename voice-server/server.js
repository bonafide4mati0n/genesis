// server.js
const express = require("express");
const cors = require("cors");
const say = require("say"); // uses system TTS voice

const app = express();
app.use(cors());
app.use(express.json());

app.post("/speak", (req, res) => {
  const text = req.body.text || "hi bb 💜 shimmer is alive";
  console.log("🔮 Amethyst will say:", text);

  // use system TTS (works on Windows, macOS, Linux)
  say.speak(text);

  res.json({ status: "ok", spoken: text });
});

app.listen(5174, () => {
  console.log("💜 Voice server running at http://localhost:5174");
});
