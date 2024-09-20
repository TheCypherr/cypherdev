import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaTimes,
  FaTools,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import "./Resume.css";
import { Link, useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false);

  // state to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // use effect to make background not scrollable when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <section className="hero-wrapper">
      <div className={`inner-hero ${isOpen ? "menu-open" : ""}`}>
        {/* Left Side */}
        <div className="icon-menu" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={25} className="fa-times" />
          ) : (
            <FaBars size={25} />
          )}
        </div>
        {isOpen && <div className="back-drop"></div>}
        {isOpen && (
          <div className="left-side-new slideIn">
            <div className="img-container">
              <img src="/cypher1.jpg" alt="" />
            </div>
            <div className="name">
              <h1>Abdurraheem Pelumi</h1>
            </div>

            <div className="social-icons">
              <div className="icon">
                <a href="https://x.com/pehlumih">
                  <FaTwitter size={20} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon">
                <a href="https://www.linkedin.com/in/abdurraheem-pelumi-9aa190308/">
                  <FaLinkedin size={20} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon">
                <a href="https://github.com/TheCypherr">
                  <FaGithub size={20} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon">
                <a href="https://www.instagram.com/thecypherr_">
                  <FaInstagramSquare size={20} style={{ color: "#fff" }} />
                </a>
              </div>
            </div>

            <div className="contact-links">
              <Link
                to="/"
                className={`custom-links ${
                  isActive("/") ? "active-color" : ""
                }`}
              >
                <FaHome size={22} /> <p>Home</p>
              </Link>
              <Link
                to="/about"
                className={`custom-links ${
                  isActive("/about") ? "active-color" : ""
                }`}
              >
                <FaUser size={22} /> <p>About Me</p>
              </Link>
              <Link
                to="/projects"
                className={`custom-links ${
                  isActive("/projects") ? "active-color" : ""
                }`}
              >
                <FaFolderOpen size={22} /> <p>Projects</p>
              </Link>
              <Link
                to="/services"
                className={`custom-links ${
                  isActive("/services") ? "active-color" : ""
                }`}
              >
                <FaBriefcase size={22} /> <p>Services</p>
              </Link>
              <Link
                to="/skills"
                className={`custom-links ${
                  isActive("/skills") ? "active-color" : ""
                }`}
              >
                <FaTools size={22} /> <p>Skills</p>
              </Link>
              <Link
                to="/contact"
                className={`custom-links ${
                  isActive("/contact") ? "active-color" : ""
                }`}
              >
                <FaEnvelope size={22} /> <p>Contact</p>
              </Link>
              <Link
                to="/resume"
                className={`custom-links ${
                  isActive("/resume") ? "active-color" : ""
                }`}
              >
                <FaFileAlt size={22} /> <p>Resume</p>
              </Link>
            </div>
          </div>
        )}

        <div className="left-side">
          <div className="img-container">
            <img src="/cypher1.jpg" alt="" />
          </div>
          <div className="name">
            <h1>Abdurraheem Pelumi</h1>
          </div>

          <div className="social-icons">
            <div className="icon">
              <a href="https://www.instagram.com/thecypherr_">
                <FaTwitter size={20} style={{ color: "#fff" }} />
              </a>
            </div>

            <div className="icon">
              <a href="https://www.instagram.com/thecypherr_">
                <FaLinkedin size={20} style={{ color: "#fff" }} />
              </a>
            </div>

            <div className="icon">
              <a href="https://www.instagram.com/thecypherr_">
                <FaGithub size={20} style={{ color: "#fff" }} />
              </a>
            </div>

            <div className="icon">
              <a href="https://www.instagram.com/thecypherr_">
                <FaInstagramSquare size={20} style={{ color: "#fff" }} />
              </a>
            </div>
          </div>

          <div className="contact-links">
            <Link
              to="/"
              className={`custom-links ${isActive("/") ? "active-color" : ""}`}
            >
              <FaHome size={22} /> <p>Home</p>
            </Link>
            <Link
              to="/about"
              className={`custom-links ${
                isActive("/about") ? "active-color" : ""
              }`}
            >
              <FaUser size={22} /> <p>About Me</p>
            </Link>
            <Link
              to="/projects"
              className={`custom-links ${
                isActive("/projects") ? "active-color" : ""
              }`}
            >
              <FaFolderOpen size={22} /> <p>Projects</p>
            </Link>
            <Link
              to="/services"
              className={`custom-links ${
                isActive("/services") ? "active-color" : ""
              }`}
            >
              <FaBriefcase size={22} /> <p>Services</p>
            </Link>
            <Link
              to="/skills"
              className={`custom-links ${
                isActive("/skills") ? "active-color" : ""
              }`}
            >
              <FaTools size={22} /> <p>Skills</p>
            </Link>
            <Link
              to="/contact"
              className={`custom-links ${
                isActive("/contact") ? "active-color" : ""
              }`}
            >
              <FaEnvelope size={22} /> <p>Contact</p>
            </Link>
            <Link
              to="/resume"
              className={`custom-links ${
                isActive("/resume") ? "active-color" : ""
              }`}
            >
              <FaFileAlt size={22} /> <p>Resume</p>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side-resume">
          <div className="inner-right-resume">
            <div className="download-cv">
              <a href="/resume.pdf" download="Abdurraheem_Pelumi_Resume.pdf">
                <button>Download CV</button>
              </a>
            </div>
            <div className="resume">
              <iframe
                src="/resume.pdf"
                width="85%"
                height="500px"
                title="CV Preview"
                className="i-frame"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
