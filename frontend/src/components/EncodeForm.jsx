// import React, { useState } from "react";
// import axios from "axios";

// const EncodeForm = () => {
//   const [message, setMessage] = useState("");
//   const [key, setKey] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [encodedImageUrl, setEncodedImageUrl] = useState("");
//   const [error, setError] = useState("");

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message || !key || !image) {
//       setError("All fields are required.");
//       return;
//     }
//     setError("");
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("message", message);
//     formData.append("key", key);
//     formData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:5000/api/steganography/encode", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setEncodedImageUrl(response.data.imagePath);
//     } catch (err) {
//       setError("Error encoding the image.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     formContainer: {
//       maxWidth: "600px",
//       margin: "0 auto",
//       backgroundColor: "#fff",
//       padding: "30px",
//       borderRadius: "8px",
//       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
//       transition: "background-color 0.3s ease",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     loader: {
//       display: "inline-block",
//       width: "24px",
//       height: "24px",
//       border: "4px solid #f3f3f3",
//       borderTop: "4px solid #007bff",
//       borderRadius: "50%",
//       animation: "spin 2s linear infinite",
//     },
//     error: {
//       color: "red",
//       marginTop: "10px",
//     },
//     h2: {
//       color: "#333",
//       marginBottom: "20px",
//     },
//     encodedImage: {
//       width: "200px",
//     },
//   };

//   return (
//     <div style={styles.formContainer}>
//       <h2 style={styles.h2}>Encode Message into Image</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Message</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div>
//           <label>Encryption Key</label>
//           <input
//             type="password"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div>
//           <label>Image</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/png, image/jpeg"
//             style={styles.input}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           style={loading ? { ...styles.button, ...styles.buttonHover } : styles.button}
//         >
//           {loading ? <div style={styles.loader}></div> : "Encode"}
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//       </form>

//       {encodedImageUrl && (
//         <div>
//           <h3>Encoded Image</h3>
//           <img src={encodedImageUrl} alt="Encoded" style={styles.encodedImage} />
//           <a href={encodedImageUrl} download>Download Encoded Image</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EncodeForm;
import React, { useState } from "react";
import axios from "axios";

const EncodeForm = () => {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [encodedImageUrl, setEncodedImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || !key || !image) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("message", message);
    formData.append("key", key);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/steganography/encode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEncodedImageUrl(response.data.imagePath);
    } catch (err) {
      setError("Error encoding the image.");
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
    formContainer: {
      maxWidth: "600px",
      backgroundColor: "#E5E5E5",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#008EC5",
    },
    loader: {
      display: "inline-block",
      width: "24px",
      height: "24px",
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #008EC5",
      borderRadius: "50%",
      animation: "spin 2s linear infinite",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    h2: {
      color: "#003963",
      marginBottom: "20px",
    },
    encodedImage: {
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
      <div style={styles.formContainer}>
        <h2 style={styles.h2}>Encode Message into Image</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div>
            <label>Encryption Key</label>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
              style={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={loading ? { ...styles.button, ...styles.buttonHover } : styles.button}
          >
            {loading ? <div style={styles.loader}></div> : "Encode"}
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>

        {encodedImageUrl && (
          <div>
            <h3>Encoded Image</h3>
            <img src={encodedImageUrl} alt="Encoded" style={styles.encodedImage} />
            <a href={encodedImageUrl} download>Download Encoded Image</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncodeForm;
