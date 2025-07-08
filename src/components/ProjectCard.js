import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {title === "Text-Analyzer" ? (
            <a
              href="https://text-analyzer-pearl.vercel.app/"
              className="btn btn-light my-2 "
            >
              Live Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </Col>
  );
};
