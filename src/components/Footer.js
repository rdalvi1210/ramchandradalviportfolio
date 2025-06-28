import { Col, Container, Row } from "react-bootstrap";
import navIcon0 from "../assets/img/icons8-github (2).svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h2 style={{ color: "white" }}>Ramchandra</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/rdalvi1210">
                <img src={navIcon0} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/ramchandra-dalvi-002a5b363/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/_r_dalvi_1210/?next=%2F">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>© 2025 Ramchandra Dalvi. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
