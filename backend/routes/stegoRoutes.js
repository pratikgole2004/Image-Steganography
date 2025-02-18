const express = require("express");
const router = express.Router();
const { encode, decode } = require("../controllers/stegoController");

const stegoRoutes = (upload) => {
  router.post("/encode", upload.single("image"), encode);
  router.post("/decode", upload.single("image"), decode);
  return router;
};

module.exports = stegoRoutes;

