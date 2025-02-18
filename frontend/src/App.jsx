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







