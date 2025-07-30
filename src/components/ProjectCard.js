import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle handler
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card className="h-100 shadow-sm border-0" style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        alt={title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column h-auto">
        <Card.Title className="fw-bold text-dark mb-2" title={title}>
          {title}
        </Card.Title>

        <Card.Text
          className="text-secondary m-0"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.4",
            textAlign: "left",
            width: "100%",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: isExpanded ? "none" : 2,
          }}
          title={description}
        >
          {description}
        </Card.Text>

        {/* Show Read more / Show less button if description is long */}
        {description.length > 100 && (
          <Button
            variant="link"
            size="sm"
            onClick={toggleExpand}
            className="p-0 my-1 align-self-start"
          >
            {isExpanded ? "Show less" : "Read more..."}
          </Button>
        )}

        {title === "Text-Analyzer" && (
          <Button
            variant="primary"
            size="sm"
            href="https://text-analyzer-pearl.vercel.app/"
            target="_blank"
            className="mt-auto"
          >
            Live Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
