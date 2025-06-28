import "animate.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
  const formInitialDetails = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
    Message: "",
  };
  // https://script.google.com/macros/s/AKfycbyd5r-y-HNCuW6UL36gytp7ocVjzP91Mn5zQkPsqS0RfHnqNiZI-TMc1RJ6XYws0N3A/exec
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const { Firstname, Lastname, Email, Phone, Message } = formDetails;

    // Validate fields
    if (!Firstname || !Lastname || !Email || !Phone || !Message) {
      setButtonText("Send");
      toast.error("Please fill out all the fields.");
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycby5nXlZThvfw1g-sOd6EhMQTvUSdkfsbnS1L3km7U098gcQo8Wgh8A6Qpl573Pilosz/exec";

    const formData = new URLSearchParams();
    formData.append("Firstname", Firstname); // AppScript expects capital 'F'
    formData.append("Lastname", Lastname);
    formData.append("Email", Email);
    formData.append("Phone", Phone);
    formData.append("Message", Message);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const text = await response.text();

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (text.includes("Added")) {
        setStatus({ success: true, message: "Message sent successfully" });
        toast.success("Message sent! Thank you for contacting me.!");
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Please try again.",
        });
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.Firstname}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("Firstname", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.Lastname}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("Lastname", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.Email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("Email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.Phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("Phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.Message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("Message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
