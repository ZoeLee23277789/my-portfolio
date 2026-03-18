import React, { useEffect, useMemo, useState } from "react";
import profilePic from "./Photo_3.jpg";

const roles = [
  "AI Systems Engineer",
  "DevOps & Full-Stack Engineer",
  "LLM-Powered GUI Agent Builder",
  "Machine Learning Engineer",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  const facts = useMemo(
    () => [
      "Dual Master’s",
      "Adobe GUI Agent",
      "TSMC DevOps",
      "IEEE ARIS 2024",
    ],
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((v) => (v + 1) % roles.length);
    }, 2400);

    return () => clearInterval(t);
  }, []);

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

  return (
    <section className="hero" id="home">
      <div className="hero-content reveal visible">
        <p className="eyebrow">Available for ML / AI Systems / SWE roles</p>
        <h1>Jou-Yi (Zoe) Lee</h1>

        <div className="typewriter">{roles[roleIndex]}</div>

        <p className="tagline">
          I build intelligent systems that combine LLMs, computer vision, and
          real-world infrastructure.
        </p>

        <div className="fact-row">
          {facts.map((item) => (
            <span key={item} className="chip magnetic">
              {item}
            </span>
          ))}
        </div>

        <div className="cta-row">
          <button
            className="btn btn-primary magnetic"
            onClick={(e) => {
              addRipple(e);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>

          <a
            className="btn btn-secondary magnetic"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            onClick={addRipple}
          >
            Resume (PDF)
          </a>

          <button
            className="btn btn-ghost magnetic"
            onClick={(e) => {
              addRipple(e);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </button>
        </div>

        <div className="social-links reveal visible">
          <a
            href="https://github.com/ZoeLee23277789"
            target="_blank"
            rel="noreferrer"
            className="social-link magnetic"
            onClick={addRipple}
            aria-label="GitHub"
          >
            <span>GH</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jou-yilee"
            target="_blank"
            rel="noreferrer"
            className="social-link magnetic"
            onClick={addRipple}
            aria-label="LinkedIn"
          >
            <span>in</span>
          </a>

          <a
            href="mailto:s1083816@berkeley.edu"
            className="social-link magnetic"
            onClick={addRipple}
            aria-label="Email"
          >
            <span>@</span>
          </a>
        </div>
      </div>

      <div className="hero-portrait reveal visible">
        <div className="portrait-card">
          <div
            className="portrait-image"
            style={{ backgroundImage: `url(${profilePic})` }}
          />
          <div className="portrait-overlay">
            <strong>DevOps • Full-Stack • AI Agents</strong>
            <span>Dual Master’s @ Berkeley + UCSC</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;