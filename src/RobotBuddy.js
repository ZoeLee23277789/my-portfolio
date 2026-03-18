import React, { useEffect, useState } from "react";

function RobotBuddy() {
  const [blink, setBlink] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Hi there! Welcome to Zoe's portfolio ✨");

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 2600);

    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const greetings = [
      "Hi there! Welcome to Zoe's portfolio ✨",
      "Want to explore my projects? 🚀",
      "You can also check my education here 🎓",
      "Feel free to look at my skills and contact info 💌",
    ];

    let index = 0;
    const talkTimer = setInterval(() => {
      index = (index + 1) % greetings.length;
      setMessage(greetings[index]);
    }, 5000);

    return () => clearInterval(talkTimer);
  }, []);

  const scrollToSection = (id, nextMessage) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMessage(nextMessage);
    setOpen(false);
  };

  return (
    <div className="robot-corner">
      <div className={`robot-speech ${open ? "expanded" : ""}`}>
        <div className="robot-speech-text">{message}</div>

        <div className="robot-speech-actions">
          <button
            onClick={() =>
              scrollToSection("projects", "Here are my featured projects 🚀")
            }
          >
            Projects
          </button>
          <button
            onClick={() =>
              scrollToSection("education", "This is my education background 🎓")
            }
          >
            Education
          </button>
          <button
            onClick={() =>
              scrollToSection("skills", "These are my technical skills ⚙️")
            }
          >
            Skills
          </button>
          <button
            onClick={() =>
              scrollToSection("contact", "Let's connect 💌")
            }
          >
            Contact
          </button>
        </div>

        <button
          className="robot-close-bubble"
          onClick={() => setOpen(false)}
          aria-label="Close bubble"
        >
          ×
        </button>
      </div>

      <button
        className="robot-body robot-corner-bounce"
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={() => setMessage("Click me to explore! ✨")}
        aria-label="Robot assistant"
      >
        <div className="robot-shadow" />

        <div className="robot-antenna">
          <span className="robot-antenna-dot" />
        </div>

        <div className="robot-head">
          <div className={`robot-eye ${blink ? "blink" : ""}`} />
          <div className={`robot-eye ${blink ? "blink" : ""}`} />
          <div className="robot-mouth" />
          <div className="robot-cheek left" />
          <div className="robot-cheek right" />
        </div>

        <div className="robot-torso">
          <div className="robot-heart" />
          <div className="robot-screen-line line1" />
          <div className="robot-screen-line line2" />
        </div>

        <div className="robot-arms">
          <span className="robot-arm left" />
          <span className="robot-arm right" />
        </div>

        <div className="robot-legs">
          <span className="robot-leg left" />
          <span className="robot-leg right" />
        </div>
      </button>
    </div>
  );
}

export default RobotBuddy;