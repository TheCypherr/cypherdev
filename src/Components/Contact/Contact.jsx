import React from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTools,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import "./Contact.css";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
      <div className="inner-hero">
        {/* Left Side */}
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
        <div className="right-side-contact">
          <div className="inner-right-contact">
            <h1>Contact Me</h1>
            <p>Send me a "Direct Message" on my socials</p>
            <div className="social-icons-contact">
              <div className="icon-contact">
                <a href="https://www.instagram.com/thecypherr_">
                  <FaTwitter size={30} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon-contact">
                <a href="https://www.instagram.com/thecypherr_">
                  <FaLinkedin size={30} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon-contact">
                <a href="https://www.instagram.com/thecypherr_">
                  <FaGithub size={30} style={{ color: "#fff" }} />
                </a>
              </div>

              <div className="icon-contact">
                <a href="https://www.instagram.com/thecypherr_">
                  <FaInstagramSquare size={30} style={{ color: "#fff" }} />
                </a>
              </div>
            </div>

            <h2>OR</h2>
            <form action="https://formspree.io/f/mvgpjgky" method="POST">
              <div className="input-one">
                <p>Name</p>
                <input type="text" name="name" className="input1" />
              </div>
              <div className="input-one">
                <p>Message</p>
                <textarea
                  type="text"
                  name="message"
                  className="input2"
                ></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
