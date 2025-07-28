import React from "react";
import { Link } from "react-router-dom";
import cmImage from "../../assets/image/visnudevsaiDp.jpg";
import "../../Styles/CMProfile.css";

const CMProfile = () => {
  return (
    <div
      className="card text-center profile-card "
      style={{ border: "1px solid gray", height: "27rem" }}
    >
      <div className="profile-img-container mt-2">
        <img
          src={cmImage}
          alt="CM"
          className="rounded-circle"
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            border: "3px solid gray",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      <div
        className="fw-bold text-white py-1 mt-3"
        style={{ backgroundColor: "#ff4500" }}
      >
        श्री विष्णु देव साय
      </div>

      <div className="fw-bold fs-6 mt-1">माननीय मुख्यमंत्री, छत्तीसगढ़ शासन</div>

      {/* Social Icons */}
      <div className="mt-3">
        <a href="#" className="btn btn-sm btn-primary me-1 socialmedia">
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="#"
          className="btn btn-sm text-white me-1 socialmedia"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="btn btn-sm btn-primary me-1 socialmedia">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="btn btn-sm btn-danger me-1 socialmedia">
          <i className="bi bi-envelope-at-fill"></i>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="mt-3">
        <Link to="/news" className="profile-link">
          समाचार
        </Link>
        <Link to="/photos" className="profile-link">
          फोटो
        </Link>
        <Link to="/cabinet-decisions" className="profile-link">
          मंत्रिपरिषद के निर्णय
        </Link>
        <Link to="/articles" className="profile-link">
          आलेख
        </Link>
      </div>
    </div>
  );
};

export default CMProfile;
