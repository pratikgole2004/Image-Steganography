const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const stegoRoutes = require("./routes/stegoRoutes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ✅ Multer setup using memory (no disk storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Routes
app.use("/api/steganography", stegoRoutes(upload));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
