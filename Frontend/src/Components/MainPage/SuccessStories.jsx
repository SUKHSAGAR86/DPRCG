
import React from "react";
import { Link } from "react-router-dom";
import infrastructureImg from "../../assets/image/infrastructure.jpg";
import technologyImg from "../../assets/image/technology.jpg";
import ratajvaeshlogo from "../../assets/image/ratajvaeshlogo.jpg";
import securityImg from "../../assets/image/security.jpg";
import agricultureImg from "../../assets/image/agriculture.jpg";
import educationImg from "../../assets/image/education.jpeg";
import "../../Styles/SuccessStory.css";

const SuccessStories = () => {
  return (
    <div
      className="pb-2 pt-2 mt-1"
      style={{ backgroundColor: "#ccc" }}
    >
      <h3 className="text-center fw-bold mb-4">सफलता की कहानियां</h3>

      <div
        id="cardCarousel"
        className="carousel slide container-fluid"
        data-bs-ride="carousel"
        data-bs-interval="1500"
        data-bs-pause="hover"
      >
        <div className="carousel-inner container-fluid">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link
                to="/infrastructure"
                className="text-decoration-none text-dark"
              >
                <StoryCard
                  title="बुनियादी ढांचा"
                  image={infrastructureImg}
                  bgClass="bg-sky"
                  items={[
                    "अमृत के 10 वर्ष",
                    "स्मार्ट सिटी मिशन",
                    "परिवहन विस्तार",
                  ]}
                />
              </Link>

              <Link to="/technology" className="text-decoration-none text-dark">
                <StoryCard
                  title="प्रौद्योगिकी"
                  image={technologyImg}
                  bgClass="bg-blue"
                  items={["डिजिटल प्रगति", "तकनीकी यात्रा", "डिजिटल दशक"]}
                />
              </Link>

              <Link
                to="/energy-environment"
                className="text-decoration-none text-dark"
              >
                <StoryCard
                  title="ऊर्जा और पर्यावरण"
                  image={ratajvaeshlogo}
                  bgClass="bg-green"
                  items={["ऊर्जा परिदृश्य", "पर्यावरण मूल्य", "पर्यावरण दिवस"]}
                />
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link to="/defense" className="text-decoration-none text-dark">
                <StoryCard
                  title="रक्षा क्षेत्र"
                  image={securityImg}
                  bgClass="bg-blue"
                  items={["डिफेंस एक्सपो", "रणनीतिक सहयोग", "आत्मनिर्भर भारत"]}
                />
              </Link>

              <Link
                to="/agriculture"
                className="text-decoration-none text-dark"
              >
                <StoryCard
                  title="कृषि"
                  image={agricultureImg}
                  bgClass="bg-green"
                  items={["मिलेट्स मिशन", "खेती में तकनीक", "जैविक कृषि"]}
                />
              </Link>

              <Link to="/education" className="text-decoration-none text-dark">
                <StoryCard
                  title="शिक्षा"
                  image={educationImg}
                  bgClass="bg-sky"
                  items={[
                    "नई शिक्षा नीति",
                    "डिजिटल लर्निंग",
                    "स्कूल पुनर्निर्माण",
                  ]}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators mt-3">
          <button
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide-to="0"
            className="active"
          />
          <button
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide-to="1"
          />
        </div>
      </div>
    </div>
  );
};

const StoryCard = ({ title, image, bgClass, items }) => (
  <div className="nv-carousel-card mx-2" style={{ width: "16rem" }}>
    <div
      className={`nv-carousel-header ${bgClass} text-white text-center fw-bold p-2`}
    >
      {title}
    </div>
    <img
      src={image}
      className="nv-carousel-img w-100"
      alt={title}
      style={{ height: "160px", objectFit: "cover" }}
    />
    <div className="nv-carousel-body p-2 bg-white">
      <ul className="mb-0 ps-3">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default SuccessStories;

