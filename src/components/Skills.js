import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS3", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">🌟 My Skills</h2>

      <div className="marquee">
        <div className="marquee-content">
          {skills.concat(skills).map((skill, index) => ( // duplicate for smooth loop
            <div className="skill-card" key={index}>
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
