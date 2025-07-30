import "animate.css";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

import projImg6 from "../assets/img/clinic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/ecommerce.png";
import projImg7 from "../assets/img/newsapp.png";
import projImg3 from "../assets/img/swiggy.png";
import projImg5 from "../assets/img/textanalyzer.png";
import projImg4 from "../assets/img/tutorial.png";
import projImg1 from "../assets/img/twitter.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Twitter Clone",
      description:
        "College Last Year Fullstack Project (React.js & Node.js & Mongo Db)",
      imgUrl: projImg1,
    },
    {
      title: "ARK-Ecom",
      description: "E-commerce Fullstack Website (Frontend)",
      imgUrl: projImg2,
    },
    {
      title: "Swiggy Clone",
      description:
        "Swiggy Fullstack Website (Fullstack) (React.js & Node.js & Mongo Db)",
      imgUrl: projImg3,
    },
    {
      title: "Clinic_Management",
      description:
        "A full-stack system to manage patient data, appointments, and doctor dashboards.",
      imgUrl: projImg6,
    },
    {
      title: "Kaivalya Infotech",
      description:
        "IT tutorial website With Admin Page (Fullstack) (React.js & Node.js & Mongo Db & Googlesheet)",
      imgUrl: projImg4,
    },
    {
      title: "Text-Analyzer",
      description:
        "Text-Analyzer Website - word counter, character counter, remove extra spaces, preview and others (React.js & Modern Javascript)",
      imgUrl: projImg5,
    },
    {
      title: "NewsWeb",
      description:
        "A dynamic news application fetches real-time news articles. Features category filtering and responsive UI.",
      imgUrl: projImg7,
    },
  ];

  const scrollContainerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(320); // default card width

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust card width based on window width
  useEffect(() => {
    if (windowWidth < 576) {
      // Mobile: nearly full container width minus paddings/margins
      setCardWidth(windowWidth - 40);
    } else {
      // Desktop: fixed width cards
      setCardWidth(320);
    }
  }, [windowWidth]);

  // Scroll left by one card width + gap
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -cardWidth - 12, // 12px gap between cards approx
        behavior: "smooth",
      });
    }
  };

  // Scroll right by one card width + gap
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 12,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;

      const maxScrollLeft =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      const nextScrollLeft =
        scrollContainerRef.current.scrollLeft + cardWidth + 12;

      if (nextScrollLeft >= maxScrollLeft) {
        // If at end, scroll back to start
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({
          left: cardWidth + 12,
          behavior: "smooth",
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my work and experiences — from full-stack
                    applications to frontend design and real-world projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      style={{ cursor: "pointer" }}
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="position-relative">
                          {/* Left Button */}
                          <button
                            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                            style={{
                              borderRadius: "50%",
                              padding: "0.5rem",
                              width: "40px",
                              height: "40px",
                              opacity: 0.8,
                              zIndex: 10,
                            }}
                            onClick={scrollLeft}
                            aria-label="Scroll Left"
                          >
                            <FaChevronLeft />
                          </button>

                          {/* Right Button */}
                          <button
                            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                            style={{
                              borderRadius: "50%",
                              padding: "0.5rem",
                              width: "40px",
                              height: "40px",
                              opacity: 0.8,
                              zIndex: 10,
                            }}
                            onClick={scrollRight}
                            aria-label="Scroll Right"
                          >
                            <FaChevronRight />
                          </button>

                          {/* Scrollable Cards */}
                          <div
                            ref={scrollContainerRef}
                            className="d-flex overflow-auto py-3 scroll-container"
                            style={{
                              scrollBehavior: "smooth",
                              whiteSpace: "nowrap",
                              gap: "12px",
                            }}
                          >
                            {projects.map((project, index) => (
                              <div
                                key={index}
                                style={{
                                  minWidth: `${cardWidth}px`,
                                  maxWidth: `${cardWidth}px`,
                                  flex: "0 0 auto",
                                }}
                              >
                                <ProjectCard {...project} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div
                          className="p-4 shadow"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "1rem",
                            animation: "fadeIn 1s ease",
                          }}
                        >
                          <h4
                            className="fw-bold mb-4"
                            style={{
                              color: "#76329f",
                              fontSize: "1.6rem",
                              borderBottom: "2px solid #76329f",
                              display: "inline-block",
                              paddingBottom: "5px",
                            }}
                          >
                            🎓 My Education
                          </h4>

                          <div className="d-flex flex-column gap-4 mt-3">
                            {[
                              {
                                label: "SSC",
                                institution: "Oxford English School, Diva",
                                details:
                                  "Completed Secondary School Certificate with distinction in Science and Mathematics.",
                              },
                              {
                                label: "HSC",
                                institution: "S.P Dnyanasadhana College, Thane",
                                details:
                                  "Higher Secondary Certificate with PCMB (Physics, Chemistry, Mathematics, Biology).",
                              },
                              {
                                label: "BSc IT",
                                institution: "E.B Madhavi College, Dombivali",
                                details:
                                  "Bachelor of Science in Information Technology - Graduated with honors.",
                              },
                              {
                                label: "CCC Course",
                                institution:
                                  "Govt. Recognized Computer Concepts – Shree Info Maharal, Thane",
                                details:
                                  "Certified in MS Office, Internet Basics, and Email Communication.",
                              },
                              {
                                label: "Fullstack Course",
                                institution: "Awdiz Institution, Vashi",
                                details:
                                  "Professional training in MERN stack: React, Node.js, MongoDB, and RESTful APIs.",
                              },
                            ].map(({ label, institution, details }, idx) => (
                              <div
                                key={idx}
                                className="d-flex align-items-start gap-3 border-start ps-3"
                                style={{
                                  borderColor: "#76329f",
                                  borderWidth: "3px",
                                }}
                              >
                                <div
                                  className="pt-1"
                                  style={{
                                    minWidth: "90px",
                                    fontWeight: "600",
                                    fontSize: "0.95rem",
                                    color: "#b684d8",
                                  }}
                                >
                                  {label}
                                </div>
                                <div>
                                  <div
                                    className="fw-semibold mb-1"
                                    style={{
                                      fontSize: "1.05rem",
                                      color: "#ffffff",
                                    }}
                                  >
                                    {institution}
                                  </div>
                                  <small
                                    className="text-light"
                                    style={{
                                      lineHeight: "1.5",
                                      fontSize: "0.9rem",
                                    }}
                                  >
                                    {details}
                                  </small>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Add fadeIn animation */}
                        <style>
                          {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
                        </style>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div
                          className="p-4 shadow"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            borderRadius: "1.2rem",
                            animation: "fadeIn 1s ease",
                          }}
                        >
                          <h4
                            className="fw-bold mb-4"
                            style={{
                              color: "#76329f",
                              fontSize: "1.7rem",
                              borderBottom: "2px solid #76329f",
                              display: "inline-block",
                              paddingBottom: "6px",
                            }}
                          >
                            💼 My Freelance & Internship Experience
                          </h4>

                          <div className="row gy-4 mt-3">
                            {[
                              {
                                role: "Full Stack Developer Intern",
                                company: "Unified Mentor Pvt. Ltd.",
                                description:
                                  "Currently working on real-time MERN projects, REST APIs, and admin dashboards.",
                                icon: "🧑‍💻",
                              },
                              {
                                role: "Frontend Developer Intern",
                                company: "Thane (6 months)",
                                description:
                                  "Designed and developed responsive interfaces using React and Tailwind CSS.",
                                icon: "🌐",
                              },
                              {
                                role: "Freelancer — Lottery Website",
                                company: "Remote",
                                description:
                                  "Built a fully responsive Lottery Website UI with optimized user flow.",
                                icon: "🎯",
                              },
                              {
                                role: "Freelancer — E-commerce Projects",
                                company: "Remote",
                                description:
                                  "Developed frontend for multiple e-commerce websites using reusable components and dynamic product rendering.",
                                icon: "🛒",
                              },
                              {
                                role: "Tech Stack",
                                company: "",
                                description:
                                  "React.js, Tailwind CSS, REST APIs, GitHub, Figma.",
                                icon: "🛠️",
                              },
                            ].map((item, index) => (
                              <div className="col-md-6" key={index}>
                                <div
                                  className="p-3 h-100"
                                  style={{
                                    backgroundColor:
                                      "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "1rem",
                                    borderLeft: "4px solid #76329f",
                                    transition:
                                      "transform 0.3s ease, box-shadow 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                      "scale(1.02)";
                                    e.currentTarget.style.boxShadow =
                                      "0 4px 12px rgba(0,0,0,0.3)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                      "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                  }}
                                >
                                  <div className="d-flex gap-3">
                                    <div style={{ fontSize: "1.6rem" }}>
                                      {item.icon}
                                    </div>
                                    <div>
                                      <div
                                        className="fw-semibold"
                                        style={{
                                          fontSize: "1.1rem",
                                          color: "#ffffff",
                                        }}
                                      >
                                        {item.role}
                                        {item.company && (
                                          <span
                                            className="text-muted ms-2"
                                            style={{ fontSize: "0.9rem" }}
                                          >
                                            — {item.company}
                                          </span>
                                        )}
                                      </div>
                                      <small
                                        className="text-light"
                                        style={{
                                          fontSize: "0.9rem",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        {item.description}
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
