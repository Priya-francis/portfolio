import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import './Home.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import developerImage from "../assets/developer-avatar.svg";
import { FaArrowDown } from "react-icons/fa";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

const particlesOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
    move: { enable: true, speed: 1.5 },
    size: { value: 3 },
  },
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      
      <div className="overlay-gradient"></div>
      
      <div className="home-content" data-aos="fade-up">
        <div className="home-image">
          <img src={developerImage} alt="Developer Avatar" />
          <div className="floating-blob"></div>
        </div>

        <div className="home-text">
          <h1>
            Hi, I'm <span className="highlight">Priya Francis</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Frontend Developer 💻", 2000,
              "React Enthusiast ⚛️", 2000,
              "UI/UX Lover 🎨", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typewriter"
          />

          <p className="intro-text">
            Passionate about building modern, responsive, and user-friendly web experiences.
          </p>

        <div className="cta-buttons">
  <Link to="projects" smooth={true} duration={500}>
    <button className="btn primary-btn">🚀 View Projects</button>
  </Link>

  
  <a 
  href="/priya_resume_new_2025.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn secondary-btn">📄 View Resume</button>
</a>
</div>

          <div className="scroll-down">
            <FaArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
