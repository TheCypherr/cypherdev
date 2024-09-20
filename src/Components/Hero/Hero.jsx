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
import "./Hero.css";
import { Link, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
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
        <div className="right-side">
          <div className="inner-right">
            <h2>"Hi there!" 👋</h2>
            <span> I'm </span>
            <TypeAnimation
              className="sequence"
              sequence={[
                "Abdurraheem Pelumi",
                1000,
                "a Frontend Developer",
                1000,
                "a FullStack Dev with React & Firebase",
                1000,
                "a Web Designer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
            <p>
              A Front-End Developer from Lagos Nigeria who is goal-driven and
              passionate about building a user-centric interface with solid
              experience in design & development.
            </p>
          </div>
          <div className="inner-right2">
            <Slider {...settings}>
              <div className="slides">
                <div className="slide-image">
                  <img src="react.png" alt="" />
                </div>
                <p>ReactJs</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="javascript.png" alt="" />
                </div>
                <p>JavaScript</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="css.png" alt="" />
                </div>
                <p>CSS3</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="html.png" alt="" />
                </div>
                <p>HTML</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="github.png" alt="" />
                </div>
                <p>Github</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="firebase.png" alt="" />
                </div>
                <p>Firebase</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="git.png" alt="" />
                </div>
                <p>Git</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="tailwinds.png" alt="" />
                </div>
                <p>Tailwind</p>
              </div>

              <div className="slides">
                <div className="slide-image">
                  <img src="figma.png" alt="" />
                </div>
                <p>Figma</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
