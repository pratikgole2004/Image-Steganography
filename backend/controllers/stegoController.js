const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const sharp = require("sharp");

// AES encryption
const encryptMessage = (message, key) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", crypto.createHash("sha256").update(key).digest(), iv);
  let encryptedMessage = cipher.update(message, "utf8", "hex");
  encryptedMessage += cipher.final("hex");
  return { iv: iv.toString("hex"), encryptedMessage };
};

// AES decryption
const decryptMessage = (encryptedMessage, key, iv) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", crypto.createHash("sha256").update(key).digest(), Buffer.from(iv, "hex"));
  let decryptedMessage = decipher.update(encryptedMessage, "hex", "utf8");
  decryptedMessage += decipher.final("utf8");
  return decryptedMessage;
};

// Encode message into image
const encodeMessageInImage = async (imagePath, encryptedData) => {
  const { iv, encryptedMessage } = encryptedData;
  const payload = Buffer.from(`${iv}:${encryptedMessage}`).toString("base64"); // Use Base64 encoding
  const payloadBits = payload.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")).join("");

  const image = sharp(imagePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  if (payloadBits.length > data.length) {
    throw new Error("Message is too large to fit in the image.");
  }

  for (let i = 0; i < payloadBits.length; i++) {
    data[i] = (data[i] & 0xFE) | parseInt(payloadBits[i], 2);
  }

  const encodedImagePath = path.join(__dirname, "../uploads/encoded", `encoded_${Date.now()}.png`);
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .toFormat("png")
    .toFile(encodedImagePath);

  return encodedImagePath;
};

// Decode message from image
const decodeMessageFromImacdge = async (imagePath, key) => {
  const image = sharp(imagePath);
  const { data } = await image.raw().toBuffer({ resolveWithObject: true });

  const payloadBits = [];
  for (let i = 0; i < data.length; i++) {
    payloadBits.push((data[i] & 0x01).toString());
  }

  const binaryString = payloadBits.join("");
  const byteArray = binaryString.match(/.{8}/g) || []; // Ensure no null values
  const payload = Buffer.from(byteArray.map((byte) => String.fromCharCode(parseInt(byte, 2))).join(""), "base64").toString();

  const [iv, encryptedMessage] = payload.split(":");
  if (!iv || !encryptedMessage) {
    throw new Error("Failed to decode the message. Ensure the correct key was used.");
  }

  return decryptMessage(encryptedMessage, key, iv);
};


// Encode controller
const encode = async (req, res) => {
  const { message, key } = req.body;
  const imagePath = req.file.path;

  try {
    const encodedImagePath = await encodeMessageInImage(imagePath, encryptMessage(message, key));

    res.json({
      message: "Image encoded successfully!",
      imagePath: `/uploads/encoded/${path.basename(encodedImagePath)}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Decode controller
const decode = async (req, res) => {
  const { key } = req.body;
  const imagePath = req.file.path;

  try {
    const decodedMessage = await decodeMessageFromImage(imagePath, key);
    res.json({ decodedMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { encode, decode };
