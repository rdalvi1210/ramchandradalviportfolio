import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true); // start loading

    const url =
      "https://script.google.com/macros/s/AKfycbxPeknFXNyleFLuFejJM8diF3fXFYyz-4wLw5jQTTTMj37vAp-9Beoba4pbDsWS01QH/exec";

    const formData = new URLSearchParams();
    formData.append("collabsEmail", email);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const text = await response.text();
      setEmail("");

      if (text.includes("Added")) {
        toast.success("Thanks for your interest! Let’s collaborate soon.");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error.");
    }

    setLoading(false); // stop loading
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Let’s Collaborate! <br /> Freelance Opportunities & Updates
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  disabled={loading}
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
