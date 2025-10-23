import React from "react";
import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import expense from "../assets/expense.png"
import calc from "../assets/calc.png"
import hike from "../assets/hike.png"
import weather from "../assets/weather.png"
import todo from "../assets/todo.png"
import thulir from "../assets/thulir.png"

/* project data (use your real image paths in /public/images or import them) */
const projectData = [
   {
    title: "Thulir Health Care",
    description: "React, NodeJs ,ExpressJs",
    link: "https://thulir-health-care.onrender.com/#/",
    image: thulir,
  },
  {
    title: "Weather App",
    description: "React, OpenWeatherMap API",
    link: "https://weatherapp-sar8.onrender.com/",
    image: weather,
  },
  {
    title: "Todo List",
    description: "React, useState",
    link: "https://todo-list-pv42.onrender.com/",
    image: todo,
  },
  {
    title: "Expense Tracker",
    description: "React, Chart.js",
    link: "https://expense-tracker-new-c77d.onrender.com/",
    image: expense,
  },
  {
    title: "Calculator",
    description: "React, CSS",
    link: "https://calculator-new-5pe6.onrender.com/",
    image: calc,
  },
  {
    title: "Hike Calculator",
    description: "React, Styled Components",
    link: "https://hikecalculator.onrender.com/",
    image: hike,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">💻 My Projects</h2>

      <div className="projects-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={28}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
          className="projects-swiper"
        >
          {projectData.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="project-card">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-image"
                  onError={(e) => {
                    // fallback if image missing
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>

                  <div className="project-links">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      🚀 View Live
                    </a>
                    {/* optional: add github link if you have one */}
                    {/* <a href={p.github} className="project-link">Code</a> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
