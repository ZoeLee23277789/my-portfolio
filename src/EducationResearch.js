import React from "react";

const education = [
  {
    degree: "M.A.S. in Engineering",
    school: "University of California, Berkeley, Berkeley, CA",
    time: "Aug 2025 – May 2027",
    status: "Expected May 2027",
    logo: `${process.env.PUBLIC_URL}/logos/berkeley.png`,
    note: "Graduate study in engineering with focus on advanced systems, applied technology, and interdisciplinary problem solving.",
    tags: ["Engineering", "Systems", "Applied Technology"],
  },
  {
    degree: "M.S. in Natural Language Processing",
    school: "University of California, Santa Cruz, Santa Cruz, CA",
    time: "Sep 2024 – Jun 2026",
    status: "Expected Jun 2026",
    logo: `${process.env.PUBLIC_URL}/logos/ucsc.png`,
    note: "Graduate study in NLP, machine learning, and language technologies.",
    tags: ["NLP", "Machine Learning", "LLMs"],
  },
  {
    degree: "B.S. in Computer Science & Engineering",
    school: "Yuan Ze University, Taoyuan, Taiwan",
    time: "Jul 2019 – Jun 2024",
    status: "Graduated",
    logo: `${process.env.PUBLIC_URL}/logos/yzu.png`,
    note: "Undergraduate training in computer science, software systems, and engineering foundations.",
    tags: ["Computer Science", "Software Engineering", "Programming"],
  },
  {
    degree:
      "B.S. in International Bachelor Program in Engineering",
    school: "Yuan Ze University, Taoyuan, Taiwan",
    time: "Jul 2019 – Jun 2024",
    status: "Graduated",
    logo: `${process.env.PUBLIC_URL}/logos/yzu.png`,
    note:
      "Interdisciplinary engineering study with exposure to Mechanical Engineering, Chemical Engineering, and Materials Science.",
    tags: ["Mechanical Engineering", "Chemical Engineering", "Materials Science"],
  },
];

function EducationCard({ e }) {
  return (
    <div className="edu-card reveal">
      <div className="edu-card-top">
        <div className="edu-logo-wrap">
          <img
            src={e.logo}
            alt={e.school}
            className="edu-logo"
            onError={(err) => {
              err.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="edu-content">
          <div className="edu-header-row">
            <h3>{e.degree}</h3>
            <span className="edu-time">{e.time}</span>
          </div>

          <div className="edu-school-row">
            <p className="edu-school">{e.school}</p>
            <span className="edu-status">{e.status}</span>
          </div>

          <p className="edu-note">{e.note}</p>

          <div className="edu-tags">
            {e.tags.map((tag) => (
              <span key={tag} className="edu-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationResearch() {
  return (
    <section id="education" className="section education-section">
      <div className="section-kicker reveal">Background</div>
      <h2 className="section-title reveal">Education</h2>
      <p className="section-copy reveal education-intro">
        My academic background combines robotics, NLP, and systems building,
        with a strong focus on turning technical ideas into practical,
        real-world AI solutions.
      </p>

      <div className="education-full-width">
        {education.map((e) => (
          <EducationCard key={`${e.school}-${e.degree}`} e={e} />
        ))}
      </div>
    </section>
  );
}