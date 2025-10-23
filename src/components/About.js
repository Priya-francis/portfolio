import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title" data-aos="fade-down">About Me</h2>
      <div className="about-content" data-aos="fade-up">
        <img src={profilePic} alt="Profile" className="about-image" />
        <div className="about-text">
          <p>
            Hello! I'm <strong>Priya Francis</strong>, a passionate <strong>Frontend Developer</strong> from Coimbatore, India with 5 years of professional experience, including 2 years in frontend development and 3 years in production support.
          </p>
          <p>
            I specialize in building responsive, user-friendly web applications using technologies like<strong> ReactJS, JavaScript, HTML5, CSS3, Redux, Tailwind CSS and React Bootstrap. </strong> I also have hands-on experience with <strong>Node.js, Express.js and MongoDB</strong> in full-stack environments.

          </p>
          <p>
            I’m a collaborative team player with strong problem-solving skills and a deep interest in crafting elegant, scalable frontend solutions. When I’m not coding, I enjoy exploring design trends and contributing to open-source projects.
          </p>
          <p>
            <strong>Let’s build something amazing together!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;