import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/ecommerce.png";
import projImg3 from "../assets/img/swiggy.png";
import projImg4 from "../assets/img/tutorial.png";
import projImg1 from "../assets/img/twitter.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Twitter Clone",
      description:
        "Collge Last Year Fullstack Project (React.js & Node.js & Mongo Db)",
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
      title: "Kaivalya Infotech",
      description:
        "IT tutorial website With Admin Page (Fullstack) (React.js & Node.js & Mongo Db & Googlesheet)",
      imgUrl: projImg4,
    },
  ];

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
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="custom-card">
                          <h4>🎓 My Education</h4>
                          <ul>
                            <li>
                              <strong>SSC : </strong> Oxford English School,
                              Diva
                            </li>
                            <li>
                              <strong>HSC : </strong> S.P Dnyanasadhana College,
                              Thane
                            </li>
                            <li>
                              <strong>BSc IT : </strong> E.B Madhavi College,
                              Dombivali
                            </li>
                            <li>
                              <strong>CCC Course : </strong> Government
                              Recognized Course on Computer Course, Shree Info
                              Maharal
                            </li>
                            <li>
                              <strong>Fullstack Course : </strong> Awdiz
                              institution, Vashi
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="custom-card">
                          <h4>💼 My Freelance Experience</h4>
                          <ul>
                            <li>
                              Frontend Developer Intern in Thane (12 months)
                            </li>
                            <li>
                              Built a fully responsive Lottery Website frontend
                            </li>
                            <li>
                              Developed frontend for multiple e-commerce
                              websites
                            </li>
                            <li>
                              Used React.js, Tailwind CSS, REST APIs for UI
                              development
                            </li>
                          </ul>
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
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
