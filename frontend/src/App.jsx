// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import EncodeForm from "./components/EncodeForm";
// import DecodeForm from "./components/DecodeForm";


// function App() {
//   const [selectedOption, setSelectedOption] = useState("encode");

//   return (
//     <div style={styles.container}>
//       <Navbar />
//       <h1 style={styles.heading}>Image Steganography</h1>
//       <div style={styles.toggleContainer}>
//         <button
//           style={selectedOption === "encode" ? styles.activeButton : styles.button}
//           onClick={() => setSelectedOption("encode")}
//         >
//           Encode
//         </button>
//         <button
//           style={selectedOption === "decode" ? styles.activeButton : styles.button}
//           onClick={() => setSelectedOption("decode")}
//         >
//           Decode
//         </button>
//       </div>
//       <div style={styles.formContainer}>
//         {selectedOption === "encode" ? <EncodeForm /> : <DecodeForm />}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     marginTop: "50px",
//   },
//   heading: {
//     fontSize: "2.5em",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   toggleContainer: {
//     marginBottom: "30px",
//   },
//   button: {
//     padding: "10px 20px",
//     margin: "0 10px",
//     fontSize: "1em",
//     cursor: "pointer",
//     backgroundColor: "#f0f0f0",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   activeButton: {
//     padding: "10px 20px",
//     margin: "0 10px",
//     fontSize: "1em",
//     cursor: "pointer",
//     backgroundColor: "#333",
//     color: "#fff",
//     border: "1px solid #333",
//     borderRadius: "5px",
//   },
//   formContainer: {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
// };

// export default App;


/* Working Code......................... */
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import EncodeForm from "./components/EncodeForm";
// import DecodeForm from "./components/DecodeForm";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/encode" element={<EncodeForm />} />
//         <Route path="/decode" element={<DecodeForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EncodeForm from "./components/EncodeForm";
import DecodeForm from "./components/DecodeForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/encode" element={<EncodeForm />} />
        <Route path="/decode" element={<DecodeForm />} />
      </Routes>
    </Router>
  );
}

export default App;







