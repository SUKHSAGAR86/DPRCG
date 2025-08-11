import React from "react";
import { useNavigate } from "react-router-dom";

import photo1 from "../../assets/image/photoGalary3.jpg";
import photo2 from "../../assets/image/photoGalary2.jpg";
import photo4 from "../../assets/image/photoGalary4.jpg";
import "../../Styles/PhotoGallerySection.css";

const PhotoGallerySection = () => {
  const navigate = useNavigate();

  return (
    <div className="photo-gallery-wrapper py-4">
      <div
        className="container-fluid px-4"
        style={{
          backgroundColor: "#f5f5f5",
          border: "10px solid black",
          borderRadius: "12px",
        }}
      >
        <div className="row g-4">
          {/* Photos */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card gallery-card position-relative overflow-hidden shadow-sm border-0">
              <img
                src={photo1}
                alt="Photos"
                className="img-fluid gallery-img"
              />
              <div className="black-overlay"></div>
              <div className="position-absolute top-50 start-50 translate-middle z-index-btn">
                <button
                  className="btn btn-warning fw-bold px-4 py-2 PhotosectionButton"
                  onClick={() => navigate("/photoalbum")}
                >
                  फोटो गैलेरी
                </button>
              </div>
            </div>
          </div>

          {/* Yojnas */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card gallery-card position-relative overflow-hidden shadow-sm border-0">
              <img
                src={photo2}
                alt="Yojnas"
                className="img-fluid gallery-img"
              />
              <div className="black-overlay"></div>
              <div className="position-absolute top-50 start-50 translate-middle z-index-btn">
                <button
                  className="btn btn-warning fw-bold px-4 py-2 PhotosectionButton"
                  onClick={() => navigate("/yojnas")}
                >
                  योजनाएँ
                </button>
              </div>
            </div>
          </div>

          {/* Videos */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card gallery-card position-relative overflow-hidden shadow-sm border-0">
              <img
                src={photo1}
                alt="Videos"
                className="img-fluid gallery-img"
              />
              <div className="black-overlay"></div>
              <div className="position-absolute top-50 start-50 translate-middle z-index-btn">
                <button
                  className="btn btn-warning fw-bold px-4 py-2 PhotosectionButton"
                  onClick={() => navigate("/videosalbum")}
                >
                  वीडियो
                </button>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card gallery-card position-relative overflow-hidden shadow-sm border-0">
              <img
                src={photo4}
                alt="Events"
                className="img-fluid gallery-img"
              />
              <div className="black-overlay"></div>
              <div className="position-absolute top-50 start-50 translate-middle z-index-btn">
                <button
                  className="btn btn-warning fw-bold px-4 py-2 PhotosectionButton"
                  onClick={() => navigate("/events")}
                >
                  ईवेंट्स
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallerySection;
