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

//   const styles = {
//     container: {
//       padding: "20px",
//       maxWidth: "500px",
//       margin: "0 auto",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "5px",
//     },
//     button: {
//       backgroundColor: "#007bff",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     error: {
//       color: "red",
//       marginTop: "10px",
//     },
//     decodedMessage: {
//       marginTop: "20px",
//       backgroundColor: "#e9ffe9",
//       padding: "15px",
//       borderRadius: "5px",
//       border: "1px solid #d1e7d1",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Decode Message from Image</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Decryption Key</label>
//           <input
//             type="password"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div>
//           <label>Image</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/png, image/jpeg"
//             required
//             style={styles.input}
//           />
//         </div>
//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Decoding..." : "Decode"}
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//       </form>

//       {decodedMessage && (
//         <div style={styles.decodedMessage}>
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
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
    },
    container: {
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      backgroundColor: "#E5E5E5",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #003963",
      borderRadius: "5px",
      backgroundColor: "#fff",
      color: "#003963",
    },
    button: {
      backgroundColor: "#003963",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#008EC5",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    decodedMessage: {
      marginTop: "20px",
      backgroundColor: "#4BC4F1",
      padding: "15px",
      borderRadius: "5px",
      border: "1px solid #3c8ebf",
      fontSize: "16px",
      color: "#003963",
      wordWrap: "break-word",
    },
    decodedImage: {
      maxWidth: "100%",
      height: "auto", 
      display: "block",
      margin: "20px 0",
      border: "1px solid #003963",
      padding: "10px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.pageContainer}>
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
    </div>
  );
};

export default DecodeForm;
