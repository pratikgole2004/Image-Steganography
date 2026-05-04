const crypto = require("crypto");
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

// ✅ Encode message into image (in memory)
const encode = async (req, res) => {
  const { message, key } = req.body;
  const imageBuffer = req.file.buffer;

  try {
    const encryptedData = encryptMessage(message, key);
    const { iv, encryptedMessage } = encryptedData;

    const payload = Buffer.from(`${iv}:${encryptedMessage}`).toString("base64");
    const payloadBits = payload
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join("");

    const image = sharp(imageBuffer);
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    if (payloadBits.length > data.length) {
      return res.status(400).json({ error: "Message is too large to fit in the image." });
    }

    for (let i = 0; i < payloadBits.length; i++) {
      data[i] = (data[i] & 0xfe) | parseInt(payloadBits[i], 2);
    }

    const outputBuffer = await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels,
      },
    })
      .toFormat("png")
      .toBuffer();

    res.set({
      "Content-Type": "image/png",
      "Content-Disposition": "attachment; filename=encoded_image.png",
    });

    res.send(outputBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Decode message from image (in memory)
const decode = async (req, res) => {
  const { key } = req.body;
  const imageBuffer = req.file.buffer;

  try {
    const image = sharp(imageBuffer);
    const { data } = await image.raw().toBuffer({ resolveWithObject: true });

    const payloadBits = [];
    for (let i = 0; i < data.length; i++) {
      payloadBits.push((data[i] & 0x01).toString());
    }

    const binaryString = payloadBits.join("");
    const byteArray = binaryString.match(/.{8}/g) || [];
    const payload = Buffer.from(
      byteArray.map((byte) => String.fromCharCode(parseInt(byte, 2))).join(""),
      "base64"
    ).toString();

    const [iv, encryptedMessage] = payload.split(":");
    if (!iv || !encryptedMessage) {
      throw new Error("Failed to decode the message. Ensure the correct key was used.");
    }

    const decodedMessage = decryptMessage(encryptedMessage, key, iv);
    res.json({ decodedMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { encode, decode };
