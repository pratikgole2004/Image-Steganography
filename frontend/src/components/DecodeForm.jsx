// import React, { useState } from "react";
// import axios from "axios";

// function DecodeForm() {
//   const [image, setImage] = useState(null);
//   const [key, setKey] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("key", key);

//     try {
//       const res = await axios.post("http://localhost:5000/api/steganography/decode", formData);
//       setResponse(res.data.decodedMessage);
//     } catch (error) {
//       console.error("Error decoding image:", error);
//       setResponse("An error occurred during decoding.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Enter your secret key"
//         value={key}
//         onChange={(e) => setKey(e.target.value)}
//         required
//         style={styles.input}
//       />
//       <button type="submit" style={styles.button}>
//         Decode
//       </button>
//       {response && <p style={styles.response}>{response}</p>}
//     </form>
//   );
// }

// const styles = {
//   input: {
//     display: "block",
//     width: "100%",
//     margin: "10px 0",
//     padding: "10px",
//     fontSize: "1em",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#333",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   response: {
//     marginTop: "10px",
//     fontSize: "1em",
//     color: "#333",
//   },
// };

// export default DecodeForm;

/**Working code.................... */
// import React, { useState } from "react";
// import axios from "axios";

// const DecodeForm = () => {
//   const [key, setKey] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [decodedMessage, setDecodedMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!key || !image) {
//       setError("All fields are required.");
//       return;
//     }
//     setError("");
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("key", key);
//     formData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/steganography/decode", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setDecodedMessage(response.data.decodedMessage);
//     } catch (err) {
//       setError("Error decoding the image. Ensure the correct key is used.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Decode Message from Image</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Decryption Key</label>
//           <input
//             type="password"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/png, image/jpeg"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Decoding..." : "Decode"}
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>

//       {decodedMessage && (
//         <div>
//           <h3>Decoded Message</h3>
//           <p>{decodedMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DecodeForm;


import React, { useState } from "react";
import axios from "axios";

const DecodeForm = () => {
  const [key, setKey] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [decodedMessage, setDecodedMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!key || !image) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("key", key);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/steganography/decode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDecodedMessage(response.data.decodedMessage);
    } catch (err) {
      setError("Error decoding the image. Ensure the correct key is used.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    decodedMessage: {
      marginTop: "20px",
      backgroundColor: "#e9ffe9",
      padding: "15px",
      borderRadius: "5px",
      border: "1px solid #d1e7d1",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Decode Message from Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Decryption Key</label>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Decoding..." : "Decode"}
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>

      {decodedMessage && (
        <div style={styles.decodedMessage}>
          <h3>Decoded Message</h3>
          <p>{decodedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default DecodeForm;
