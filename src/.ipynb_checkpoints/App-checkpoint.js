import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import EducationResearch from "./EducationResearch";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import LoadingScreen from "./LoadingScreen"; // 🔹 引入 Loading 畫面
import './styles.css';

function App() {
  const [loading, setLoading] = useState(true); // 🔹 初始為 true，代表正在加載

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // 🔹 2 秒後讓 "Hello" 消失
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen /> // 🔹 加載時顯示 Hello
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education-research" element={<EducationResearch />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
