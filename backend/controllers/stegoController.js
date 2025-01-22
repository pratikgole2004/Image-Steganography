
// Working code........................

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

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

// LSB encoding
// const encodeMessageInImage = (imageBuffer, encryptedData) => {
//   const { iv, encryptedMessage } = encryptedData;
//   const payload = `${iv}:${encryptedMessage}`;
//   const payloadBits = payload.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")).join("");
  
//   const imageArray = Buffer.from(imageBuffer);
//   if (payloadBits.length > imageArray.length) {
//     throw new Error("Message is too large to fit in the image.");
//   }

//   let bitIndex = 0;
//   for (let i = 0; i < imageArray.length && bitIndex < payloadBits.length; i++) {
//     imageArray[i] = (imageArray[i] & 0xFE) | parseInt(payloadBits[bitIndex], 2);
//     bitIndex++;
//   }

//   return imageArray;
// };

// 2 nd working


const encodeMessageInImage = (imageBuffer, encryptedData) => {
  const { iv, encryptedMessage } = encryptedData;
  const payload = `${iv}:${encryptedMessage}`;
  const payloadBits = payload.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")).join("");

  const imageArray = Buffer.from(imageBuffer);
  if (payloadBits.length > imageArray.length) {
    throw new Error("Message is too large to fit in the image.");
  }

  let bitIndex = 0;
  for (let i = 0; i < imageArray.length && bitIndex < payloadBits.length; i++) {
    imageArray[i] = (imageArray[i] & 0xFE) | parseInt(payloadBits[bitIndex], 2);
    bitIndex++;
  }

  return imageArray;
};



// LSB decoding
const decodeMessageFromImage = (imageBuffer, key) => {
  const imageArray = Buffer.from(imageBuffer);
  const payloadBits = [];
  for (let i = 0; i < imageArray.length; i++) {
    payloadBits.push((imageArray[i] & 0x01).toString());
  }

  const payload = payloadBits.join("").match(/.{8}/g).map((byte) => String.fromCharCode(parseInt(byte, 2))).join("");
  const [iv, encryptedMessage] = payload.split(":");
  
  if (!iv || !encryptedMessage) {
    throw new Error("Failed to decode the message. Ensure the correct key was used.");
  }

  return decryptMessage(encryptedMessage, key, iv);
};

// Encode controller
const encode = (req, res) => {
  const { message, key } = req.body;
  const imagePath = req.file.path;


  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const encodedImage = encodeMessageInImage(imageBuffer, encryptMessage(message, key));

    const outputPath = path.join(__dirname, "../uploads/encoded", `encoded_${Date.now()}.png`);
    fs.writeFileSync(outputPath, encodedImage);

    

    res.json({
      message: "Image encoded successfully!",
      imagePath: `/uploads/encoded/${path.basename(outputPath)}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Decode controller
const decode = (req, res) => {
  const { key } = req.body;
  const imagePath = req.file.path;

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const decodedMessage = decodeMessageFromImage(imageBuffer, key);

    res.json({ decodedMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { encode, decode };




