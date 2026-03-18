import React from "react";

const skills = [
  {
    title: "Infrastructure / Automation",
    items: [
      "Docker",
      "CI/CD",
      "Apache Airflow",
      "Prometheus",
      "Grafana",
      "Flask API",
      "ETL Pipelines",
      "GitHub",
      "Azure",
    ],
  },
  {
    title: "Programming and Tools",
    items: [
      "Python",
      "C++",
      "JavaScript",
      "MATLAB",
      "Golang",
      "ROS",
      "YOLOv9",
      "Selenium",
      "Scrapy",
      "SQL",
      "DSA",
      "Linux",
    ],
  },
  {
    title: "Machine Learning and NLP",
    items: [
      "LLM",
      "PyTorch",
      "Keras",
      "Pandas/NumPy",
      "SpaCy",
      "NLTK",
      "GRU/LSTM",
      "Agent Systems",
      "OpenCV",
    ],
  },
  {
    title: "Embedded Systems and Mechanical Design",
    items: [
      "Raspberry Pi",
      "Arduino",
      "3D Printing",
      "AutoCAD",
      "Ansys",
      "SolidWorks",
    ],
  },
];

function Skills() {
  return (
    <>
      <h2 className="section-title reveal">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-category reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag magnetic">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;