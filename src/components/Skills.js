import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I specialize in full-stack web development using the MERN stack.
                I build responsive UIs, scalable APIs, and real-time features
                using modern tools and best practices.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Angular (FrontEnd)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node.js & Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MongoDB & MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML / CSS / JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>REST APIs</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Socket.io (Real-time Chat)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Git & GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React Native</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
