import React from "react";

function Navbar() {
  const navItems = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Research", "research"],
    ["Education", "education"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="top-nav glass-nav reveal visible">
      <button
        className="brand magnetic"
        onClick={() => scrollToSection("home")}
      >
        <span className="brand-name">Jou-Yi Lee</span>
        <span className="brand-role">AI Systems Engineer</span>
      </button>

      <nav>
        {navItems.map(([label, id]) => (
          <button
            key={id}
            className="nav-link magnetic"
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;