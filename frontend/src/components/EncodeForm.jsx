// import React, { useState } from "react";
// import axios from "axios";

// function EncodeForm() {
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState("");
//   const [key, setKey] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("message", message);
//     formData.append("key", key);

//     try {
//       const res = await axios.post("http://localhost:5000/api/steganography/encode", formData);
//       setResponse(res.data.message);
//     } catch (error) {
//       console.error("Error encoding image:", error);
//       setResponse("An error occurred during encoding.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//         required
//       />
//       <textarea
//         placeholder="Enter your secret message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//         style={styles.textarea}
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
//         Encode
//       </button>
//       {response && <p style={styles.response}>{response}</p>}
//     </form>
//   );
// }

// const styles = {
//   textarea: {
//     display: "block",
//     width: "100%",
//     margin: "10px 0",
//     padding: "10px",
//     fontSize: "1em",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
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

// export default EncodeForm;




/*Working code............................................*/
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

//   return (
//     <div>
//       <h2>Encode Message into Image</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Message</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Encryption Key</label>
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
//           {loading ? "Encoding..." : "Encode"}
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>

//       {encodedImageUrl && (
//         <div>
//           <h3>Encoded Image</h3>
//           <img src={encodedImageUrl} alt="Encoded" style={{ width: "200px" }} />
//           <a href={encodedImageUrl} download>Download Encoded Image</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EncodeForm;


/**Working code.............. */
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
//     <div>
//       <h2 style={styles.h2}>Encode Message into Image</h2>
//       <form onSubmit={handleSubmit} style={styles.formContainer}>
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
    formContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    loader: {
      display: "inline-block",
      width: "24px",
      height: "24px",
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #007bff",
      borderRadius: "50%",
      animation: "spin 2s linear infinite",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    h2: {
      color: "#333",
      marginBottom: "20px",
    },
    encodedImage: {
      width: "200px",
    },
  };

  return (
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
  );
};

export default EncodeForm;
