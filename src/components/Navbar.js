import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">✨ My Portfolio</div>
      <div className="navbar-links">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          spy={true} 
          activeClass="active"
        >
          Home
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          spy={true} 
          activeClass="active"
        >
          About
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          spy={true} 
          activeClass="active"
        >
          Projects
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          spy={true} 
          activeClass="active"
        >
          Skills
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          spy={true} 
          activeClass="active"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
