// App.js

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import EducationResearch from "./EducationResearch";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import LoadingScreen from "./LoadingScreen";
import './styles.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? <LoadingScreen /> : <AppContent />}
    </Router>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  // 將 ref 暴露給其他元件使用（例如從 About 按鈕觸發 scroll）
  useEffect(() => {
    window.scrollToSection = (sectionId) => {
      const section = sectionsRef.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSection = entry.target.id;
          if (newSection !== activeSection) {
            setActiveSection(newSection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education-research" element={<EducationResearch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      {/* 🔹 監聽區塊 */}
      <div>
        <section id="home" ref={(el) => (sectionsRef.current.home = el)} style={{ scrollMarginTop: "120px" }}/>
        <section id="about" ref={(el) => (sectionsRef.current.about = el)}>
          <About />
        </section>
        <section id="projects" ref={(el) => (sectionsRef.current.projects = el)}>
          <Projects />
        </section>
        <section id="education-research" ref={(el) => (sectionsRef.current.education = el)}>
          <EducationResearch />
        </section>
        <section id="contact" ref={(el) => (sectionsRef.current.contact = el)}>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
