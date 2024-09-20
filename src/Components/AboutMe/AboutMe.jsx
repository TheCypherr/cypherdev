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
import "./AboutMe.css";
import { Link, useLocation } from "react-router-dom";

const AboutMe = () => {
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
        <div className="right-side-about">
          <div className="inner-right-about">
            <h1>About Me</h1>
            <p>
              I'm <span>"Abdurraheem Pelumi"</span> or <span>"Cypher"</span> as
              my friends like to call me. I am a Frontend Developer from Lagos
              Nigeria with solid experience in creating responsive, user-centric
              interfaces. Whether it's building websites tailored to brand needs
              or collaborating within a team, I put in solid efforts in bringing
              digital visions to life and enhancing user experiences.
            </p>
            <p>
              I thrive in dynamic environments and I'm always eager to
              collaborate with like-minded professionals to drive innovative
              projects forward. With a strong foundation in design tools like
              Figma, I bridge the gap between design and development seamlessly.
              I possess excellent communication and problem-solving skills.
            </p>
            <p>
              My degree in <span>"Mathematics"</span> from a reputable
              University has honed my critical thinking and problem-solving
              abilities, which I leverage in tackling complex challenges in
              development. I am easily inspired, always eager to learn and also
              accomplish new heights as building solutions has always been my
              priority.
            </p>
            <h2>How I get the Job done?</h2>
            <p>
              As a <span>frontend developer,</span> my process is designed to
              ensure I build a user-centric interface just as I mentioned
              earlier while also maintaining transparency and collaboration with
              my clients.
            </p>
            <p>
              I begin by deeply understanding the project's goals and the target
              audience, ensuring that the design and functionality align with
              the client's vision. Whether its building a responsive website or
              optimizing user interactions, I prioritize performance,
              accessibility and scability.
            </p>
            <p>
              I rely on a combination of modern frameworks such as "React" which
              happens to be my favorite, to write a clean and maintainable code
              to bring designs to life and every feature I implement is
              touroughly tested for cross-browser compatibility. Ensuring it
              works across different devices and screen sizes.
            </p>
            <p>
              I also believe in <span>consistent communication</span> throughout
              the development process, updating clients regularly on progress
              and gathering feedback to make sure the end product exceeds
              expectations. So my goal is not just to deliver a products but
              create and build a solution that helps clients achieve their
              business goals while providing a great user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
