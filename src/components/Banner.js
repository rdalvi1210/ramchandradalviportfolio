import "animate.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import Angular from "../assets/img/angular.png";
import Bootstrap from "../assets/img/bootstrap.jpg";
import MongoDb from "../assets/img/mongodb.jpg";
import Node from "../assets/img/node.jpg";
import photo from "../assets/img/photo.png";
import resumePDF from "../assets/img/Ram-mycv.pdf";
import React from "../assets/img/react.jpg";
import Tailwind from "../assets/img/tailwind.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ramchandra Dalvi`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "MERN Stack Developer", "Frontend Developer", "Backend Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a MERN Stack Developer from India skilled in building
                    responsive web apps with React.js, Node.js, Express.js, and
                    MongoDB. I also have experience with Angular and React
                    Native (Android). Currently, I'm interning as a Full Stack
                    Developer at Unified Mentor Pvt Ltd, gaining hands-on
                    experience with real projects. I'm passionate about clean
                    code, continuous learning, and delivering smooth digital
                    experiences.
                  </p>
                  <button>
                    <a href={resumePDF} download>
                      My Resume <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn photo-container"
                      : "photo-container"
                  }
                >
                  <img src={photo} alt="Header Img" className="profile-photo" />

                  {/* Floating Skill Images */}
                  <img
                    src={Angular}
                    alt="React"
                    className="skill-icon skill-1"
                  />
                  <img
                    src={React}
                    alt="Node.js"
                    className="skill-icon skill-2"
                  />
                  <img
                    src={MongoDb}
                    alt="MongoDB"
                    className="skill-icon skill-3"
                  />
                  <img
                    src={Node}
                    alt="Express.js"
                    className="skill-icon skill-4"
                  />
                  <img
                    src={Tailwind}
                    alt="Angular"
                    className="skill-icon skill-5"
                  />
                  <img
                    src={Bootstrap}
                    alt="React Native"
                    className="skill-icon skill-6"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
