import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { List, X } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import navIcon0 from "../assets/img/icons8-github (2).svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        expanded={expanded}
        onToggle={setExpanded}
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{ color: "white" }}>Ramchandra</h1>
          </Navbar.Brand>

          {/* Hamburger Button - visible only on mobile */}
          <div className="d-md-none">
            <button
              aria-controls="basic-navbar-nav"
              aria-expanded={expanded}
              aria-label="Toggle navigation"
              className="custom-navbar-toggler"
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.8rem",
              }}
            >
              {expanded ? <X /> : <List />}
            </button>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("home");
                  setExpanded(false);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("skills");
                  setExpanded(false);
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("projects");
                  setExpanded(false);
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("projects");
                  setExpanded(false);
                }}
              >
                Education
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("projects");
                  setExpanded(false);
                }}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#client"
                className={
                  activeLink === "client" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("client");
                  setExpanded(false);
                }}
              >
                Client
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  onUpdateActiveLink("connect");
                  setExpanded(false);
                }}
              >
                Any Query ?
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/rdalvi1210">
                  <img src={navIcon0} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ramchandra-dalvi-002a5b363/">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/_r_dalvi_1210/?next=%2F">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
