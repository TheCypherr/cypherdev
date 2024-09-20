import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaTools,
  FaTwitter,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Skills.css";
import { Link, useLocation } from "react-router-dom";

const Skills = () => {
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

  // state to toggle visibility of skills
  const [skills, setSkills] = useState(false);
  const [language, setLanguage] = useState(false);

  const toggleSkills = () => {
    setSkills(!skills);
  };
  const toggleLanguage = () => {
    setLanguage(!language);
  };

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
        <div className="right-side-skills">
          <div className="inner-right-skills">
            <h1>Skills</h1>
            <div className="tools-framework">
              <h2 onClick={toggleSkills}>
                {skills ? <FaChevronUp /> : <FaChevronDown />} Tools &
                Frameworks
              </h2>
              {skills && (
                <div className="visible-div">
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/react.png" alt="react" />
                    </div>
                    <p>React</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/firebase.png" alt="firebase" />
                    </div>
                    <p>Firebase</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/tailwinds.png" alt="tailwinds" />
                    </div>
                    <p>Tailwind CSS</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/git.png" alt="git" />
                    </div>
                    <p>Git</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/figma.png" alt="figma" />
                    </div>
                    <p>Figma</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/github.png" alt="github" />
                    </div>
                    <p>Github</p>
                  </div>
                </div>
              )}
            </div>

            <div className="language">
              <h2 onClick={() => toggleLanguage()}>
                {language ? <FaChevronUp /> : <FaChevronDown />} Language
              </h2>
              {language && (
                <div className="visible-div">
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/javascript.png" alt="javascript" />
                    </div>
                    <p>Javascript</p>
                  </div>

                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/html.png" alt="html" />
                    </div>
                    <p>HTML</p>
                  </div>
                  <div className="visible-skills">
                    <div className="img-contain">
                      <img src="/css.png" alt="css" />
                    </div>
                    <p>CSS</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
