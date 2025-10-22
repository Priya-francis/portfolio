import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">📩 Contact Me</h2>

      <div className="contact-content">
        {/* Left side contact info */}
        <div className="contact-left">
          <div className="info-block">
            <h3>📍Address</h3>
            <p>
              19, The Lords Castle, <br />
              Sasi Avenue Extension, <br />
              Cheranmanagar - 641014, <br />
              Coimbatore, Tamil Nadu
            </p>
          </div>

          <div className="info-block">
            <h3>🔗 Social Links</h3>
            <div className="social-icons">
              <a href="https://github.com/priya-francis" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/priya-francis-a28b02163/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right side Google Map */}
        <div className="contact-right">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.369387294793!2d76.98608321480147!3d11.03833189214888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859dbb7c1bdb9%3A0xd7c1c6a8f1f0b47!2sCheranmanagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641014!5e0!3m2!1sen!2sin!4v1693750597006!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
