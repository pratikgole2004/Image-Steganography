const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const stegoRoutes = require("./routes/stegoRoutes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads/temp")),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

app.use("/api/steganography", stegoRoutes(upload));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



