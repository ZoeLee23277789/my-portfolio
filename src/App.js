import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import About from "./About";
import WorkExperience from "./WorkExperience";
import EducationResearch from "./EducationResearch";
import Skills from "./Skills";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";
import RobotBuddy from "./RobotBuddy";
import PublishedResearch from "./PublishedResearch";

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish?.(), 1400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div>
        <div className="loading-title">Booting Portfolio</div>
        <div className="loading-subtitle">loading modules…</div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  const facts = useMemo(
    () => [
      "San Jose, CA",
      "Dual Master’s",
      "LLM GUI Agent",
      "TSMC DevOps",
      "IEEE ARIS 2024",
    ],
    []
  );

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [loading]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    const glow = document.querySelector(".mouse-glow");
    const progress = document.querySelector(".scroll-progress");

    const onMouseMove = (e) => {
      if (!cursor || window.innerWidth <= 768) return;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      requestAnimationFrame(() => {
        if (follower) {
          follower.style.left = `${e.clientX}px`;
          follower.style.top = `${e.clientY}px`;
        }
      });

      if (glow) {
        glow.style.left = `${e.clientX - 280}px`;
        glow.style.top = `${e.clientY - 280}px`;
      }
    };

    const onScroll = () => {
      if (!progress) return;
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${(scrollTop / docHeight) * 100}%`;
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [loading]);

  useEffect(() => {
    const interactive = document.querySelectorAll(
      ".magnetic, .project-card, .social-link, .btn, .robot-body, .robot-panel button"
    );
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    const enter = () => {
      if (window.innerWidth <= 768 || !cursor || !follower) return;
      cursor.classList.add("cursor-active");
      follower.classList.add("cursor-active");
    };

    const leave = () => {
      if (!cursor || !follower) return;
      cursor.classList.remove("cursor-active");
      follower.classList.remove("cursor-active");
    };

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [loading]);

  const addRipple = (e) => {
    const target = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const rect = target.getBoundingClientRect();

    circle.className = "ripple";
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    target.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

  const handleCardMove = (e) => {
    if (window.innerWidth <= 900) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 18;
    const rotateY = (centerX - x) / 18;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
  };

  const resetCard = (e) => {
    e.currentTarget.style.transform = "";
  };

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="portfolio-shell">
      <div className="cursor" />
      <div className="cursor-follower" />
      <div className="mouse-glow" />
      <div className="scroll-progress" />
      <div className="animated-bg" />

      <div className="floating-shapes">
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
      </div>

      <RobotBuddy />
      <Navbar />

      <main>
        <Home />

        <section id="about" className="section">
          <h2 className="section-title reveal">About</h2>
          <About />
        </section>

        <WorkExperience />
        <Projects />
        <PublishedResearch addRipple={addRipple} />
        <EducationResearch />

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="contact" className="section">
          <h2 className="section-title reveal">Contact</h2>
          <div className="contact-card reveal">
            <h3>Let’s build something.</h3>
            <p>
              If you have a role in infrastructure, AI systems, platform
              engineering, DevOps, or agentic tooling, I’d love to chat.
            </p>
            <div className="contact-links">
              <a
                className="btn btn-primary magnetic"
                href="mailto:s1083816@berkeley.edu"
                onClick={addRipple}
              >
                Email Me
              </a>
              <a
                className="btn btn-secondary magnetic"
                href="https://www.linkedin.com/in/jou-yilee"
                target="_blank"
                rel="noreferrer"
                onClick={addRipple}
              >
                LinkedIn
              </a>
              <a
                className="btn btn-secondary magnetic"
                href="https://github.com/ZoeLee23277789"
                target="_blank"
                rel="noreferrer"
                onClick={addRipple}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;








{/* <section id="research" className="section"> */}
{/* <h2 className="section-title reveal">Published Research</h2>
<div className="research-card reveal">
  <h3>Mobile Robot Path Planning</h3>
  <p className="research-subtitle">
    Practical Implementation of Q-Learning and Object Detection for
    Mobile Robot Path Planning
  </p>
  <ul className="project-details">
    <li>
      Combined Q-Learning with YOLOv9 for navigation in static
      environments.
    </li>
    <li>Published at IEEE ARIS 2024.</li>
    <li>
      Connected real-time perception with decision-making for robotics
      applications.
    </li>
  </ul>
  <a
    className="read-paper-btn magnetic"
    href="https://ieeexplore.ieee.org/document/10679961"
    target="_blank"
    rel="noreferrer"
    onClick={addRipple}
  >
    Read Paper
  </a>
</div>
</section> */}