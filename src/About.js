import React from "react";
import aboutPic from "./About.jpg";

function About() {
  return (
    <div className="about-grid">
      <div className="media-card reveal">
        <div
          className="about-image"
          style={{ backgroundImage: `url(${aboutPic})` }}
        />
      </div>

      <div className="content-card reveal">
        <h3>Engineer first — research-driven builder.</h3>

        <p>
          I’m a dual Master’s student at UC Berkeley and UC Santa Cruz with
          hands-on experience in platform engineering, production dashboards,
          observability tooling, LLM systems, and research prototypes that can
          actually ship.
        </p>

        <ul className="bullet-list">
          <li>
            DevOps / full-stack features at TSMC with Docker, Azure
            CI/CD, and internal tooling.
          </li>
          <li>
            Built an LLM-driven GUI agent for Adobe Express under canvas and
            Shadow DOM constraints.
          </li>
          <li>
            Published IEEE research combining Q-learning and YOLOv9 for robot
            navigation.
          </li>
        </ul>

        <div className="info-grid">
          <div>
            <span>Mobile Number</span>
            <strong>+1 408-618-9437</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>s1083816@berkeley.edu</strong>
          </div>
          <div>
            <span>GitHub</span>
            <strong>ZoeLee23277789</strong>
          </div>
          <div>
            <span>LinkedIn</span>
            <strong>jou-yilee</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;