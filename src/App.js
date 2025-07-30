import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./App.css";
import { Banner } from "./components/Banner";
import Client from "./components/Client";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Client />
      <Projects />
      <Contact />
      <Footer />

      {/* Go to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="position-fixed bottom-0 end-0 m-4 p-2 rounded-circle text-white border-0 shadow"
          style={{
            zIndex: 9999,
            width: 44,
            height: 44,
            backgroundColor: "#b684d8",
          }}
          aria-label="Go to Top"
        >
          ↑
        </button>
      )}

      {/* WhatsApp and Phone Buttons */}
      <div
        className="position-fixed bottom-0 start-0 m-4 d-flex flex-column gap-3"
        style={{ zIndex: 9999 }}
      >
        <a
          href="tel:+918779399691"
          className="btn d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{ width: 50, height: 50, backgroundColor: "teal" }}
          aria-label="Call"
        >
          <FaPhoneAlt color="white" size={20} />
        </a>

        <a
          href="https://wa.me/918779399691"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{ width: 50, height: 50 }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
}

export default App;
