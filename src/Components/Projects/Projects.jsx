import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaChevronCircleRight,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTimes,
  FaBars,
  FaTools,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import "./Projects.css";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  // state to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [viewMore, setViewMore] = useState({
    port1: "",
    port2: "",
    port3: "",
    port4: "",
    port5: "",
    port6: "",
    port7: "",
    port8: "",
  });

  // toggle viewmore
  const toggleViewMore = (port) => {
    setViewMore((prevState) => ({
      ...prevState,
      [port]: !prevState[port],
    }));
  };

  // function to prevent scroll when toggle is open
  useEffect(() => {
    if (viewMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewMore]);

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
        <div className="right-side-projects">
          <div className="inner-right-projects">
            <h1>Projects</h1>
            <div className="project-div1">
              <div className="one-side">
                <div className="img-project">
                  <img src="/portfolio.png" alt="projects" />
                </div>
                <div className="texts">
                  <h2>CypherDev Portfolio</h2>
                  <p>
                    Portfolio Design and Build inspired by the "fear of being
                    average."
                  </p>
                  <div className="links">
                    <a href="">
                      <FaLink size={17} />
                    </a>
                    <a href="">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - React, Javascript, CSS</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port1.png" alt="project1" />
                </div>
                <div className="texts">
                  <h2>WIBA "Online Learning"</h2>
                  <p>
                    WIBA will be providing lasting solutions to students and
                    help them get prepared and pass exams.
                  </p>
                  <div className="links">
                    <a href="https://wiba.vercel.app">
                      <FaLink size={17} />
                    </a>
                    <a href="#">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - React, Javascript, CSS3, Firebase</p>
                    <p>Category - Ongoing Fullstack Project</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port2.png" alt="project2" />
                </div>
                <div className="texts">
                  <h2>Item7 Restaurant</h2>
                  <p>
                    "Item7" is developed to enable customers make food orders
                    from the comfort of their home without breaking a sweat.
                  </p>
                  <div className="links">
                    <a href="https://item7-com.vercel.app">
                      <FaLink size={17} />
                    </a>
                    <a href="#">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - React, Javascript, CSS3, Firebase</p>
                    <p>Category - Ongoing Fullstack Project</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port3.png" alt="project3" />
                </div>
                <div className="texts">
                  <h2>Photography Portfolio</h2>
                  <p>
                    Apart from being a developer, I'm also a "Creative Mobile
                    Photographer". You can think of it as a "pocket gallery"
                  </p>
                  <div className="links">
                    <a href="https://shotsbycypher.vercel.app/">
                      <FaLink size={17} />
                    </a>
                    <a href="https://github.com/TheCypherr/cyphershots">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - React, Javascript, CSS3</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port4.png" alt="project3" />
                </div>
                <div className="texts">
                  <h2>NFT Landing Page</h2>
                  <p>
                    The initial goal of this project was to build a Web3 landing
                    page but now it's about NFT's. The design prioritizes user
                    experience across all devices.
                  </p>
                  <div className="links">
                    <a href="https://thecypherr.github.io/CypherWallet/">
                      <FaLink size={17} />
                    </a>
                    <a href="https://github.com/TheCypherr/CypherWallet">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - HTML, Javascript, CSS3</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port5.png" alt="project3" />
                </div>
                <div className="texts">
                  <h2>Car Quiz App</h2>
                  <p>
                    This is a quiz app that'll test your knowledge about cars
                    too. It uses local storage to store and get user data after
                    a user completes a quiz
                  </p>
                  <div className="links">
                    <a href="https://thecypherr.github.io/CarQuiz/">
                      <FaLink size={17} />
                    </a>
                    <a href="https://github.com/TheCypherr/CarQuiz">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - HTML, Javascript, CSS3</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/port6.png" alt="project3" />
                </div>
                <div className="texts">
                  <h2>Cee-Tee Shopping Hub</h2>
                  <p>
                    Simple shopping website built with HTML, CSS & JavaScript.
                    Completely responsive accross all mobile devices.
                  </p>
                  <div className="links">
                    <a href="https://thecypherr.github.io/cypher-ecommerce-webtest/">
                      <FaLink size={17} />
                    </a>
                    <a href="https://github.com/TheCypherr/cypher-ecommerce-webtest">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - HTML, Javascript, CSS3</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>

              <div className="one-side">
                <div className="img-project">
                  <img src="/ngo.png" alt="project3" />
                </div>
                <div className="texts">
                  <h2>NGO for African Kids</h2>
                  <p>
                    A simple landing page for donating and helping some African
                    kids get proper Education. It's a random design I stumbled
                    accross on Instagram.
                  </p>
                  <div className="links">
                    <a href="https://thecypherr.github.io/cypher-charity-webtest/">
                      <FaLink size={17} />
                    </a>
                    <a href="https://github.com/TheCypherr/cypher-charity-webtest">
                      <FaGithub size={20} />
                    </a>
                  </div>
                  <div className="tools">
                    <p>Technologies - HTML, Javascript, CSS3</p>
                    <p>Category - Frontend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
