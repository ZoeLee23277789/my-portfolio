// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import EducationResearch from "./EducationResearch";
// import Contact from "./Contact";
// import About from "./About";
// import Projects from "./Projects";
// import LoadingScreen from "./LoadingScreen"; // 🔹 引入 Loading 畫面
// import './styles.css';

// function App() {
//   const [loading, setLoading] = useState(true); // 🔹 初始為 true，代表正在加載

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // 🔹 2 秒後讓 "Hello" 消失
//     }, 2000);
//   }, []);

//   return (
//     <Router>
//       {loading ? (
//         <LoadingScreen /> // 🔹 加載時顯示 Hello
//       ) : (
//         <>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Navigate to="/home" />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/education-research" element={<EducationResearch />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="*" element={<Navigate to="/home" />} />
//           </Routes>
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import EducationResearch from "./EducationResearch";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import LoadingScreen from "./LoadingScreen";
import './styles.css';

function App() {
  const [loading, setLoading] = useState(true); // 初始為 true，代表正在加載

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // 2 秒後讓 Loading 畫面消失
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

// 🔹 **AppContent - 放置 `useNavigate()`，確保它在 Router 內**
function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});
  const navigate = useNavigate(); // 🔹 這裡放在 Router 內部

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
            navigate(`/${newSection}`);
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
  }, [navigate, activeSection]);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education-research" element={<EducationResearch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      {/* 🔹 監聽區塊 */}
        <div>
          <section id="home" ref={(el) => (sectionsRef.current.home = el)} />
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
