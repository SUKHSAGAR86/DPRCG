import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";

import defaultImg from "../../../assets/image/default_news.jpg";

const CmAllNews = () => {
  const [cmNewsData, setCmNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:3081/api/cmnews/get-cmnews";

    const fetchNewsData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const result = response.data;

        if (result.data && result.data.length > 0) {
          // Sort the news data by publish_date in descending order (latest first)
          const sortedNews = result.data[0].cmnews.sort((a, b) => {
            const dateA = new Date(a.publish_date);
            const dateB = new Date(b.publish_date);
            return dateB - dateA; // Descending order
          });
          setCmNewsData(sortedNews);
        } else {
          setCmNewsData([]);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
        setError(
          "डेटा प्राप्त करने में त्रुटि। कृपया बाद में पुनः प्रयास करें।"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div
        className="pt-3 text-center"
        style={{ backgroundColor: "rgb(244, 248, 248)" }}
      >
        <h3>लोड हो रहा है...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="pt-3 text-center text-danger"
        style={{ backgroundColor: "rgb(244, 248, 248)" }}
      >
        <h3>{error}</h3>
      </div>
    );
  }

  if (cmNewsData.length === 0) {
    return (
      <div
        className="pt-3 text-center"
        style={{ backgroundColor: "rgb(244, 248, 248)" }}
      >
        <h3>कोई समाचार उपलब्ध नहीं है।</h3>
      </div>
    );
  }

  return (
    <div>
      <TobBar />
      <Logosection />
      <Navbar />

      <div className="pt-3" style={{ backgroundColor: "rgb(244, 248, 248)" }}>
        <div className="text-center mb-5">
          <h3 className="fw-bold p-2 bg-info-subtle fw-bold bi-newspaper">
            &nbsp;मुख्यमंत्री समाचार
          </h3>
        </div>

        <div className="container-fluid">
          <div className="row g-4">
            {/* This component maps over ALL news items without slicing */}
            {cmNewsData.map((news, index) => (
              <div className="col-md-6" key={index}>
                <div className="card shadow-lg rounded-2 h-100">
                  <div className="d-flex flex-column flex-md-row bg-white overflow-hidden rounded-2 h-100">
                    <img
                      src={
                        news.featured_photo_hindi &&
                        news.featured_photo_hindi !== "#"
                          ? news.featured_photo_hindi
                          : defaultImg
                      }
                      onError={(e) => {
                        e.target.src = defaultImg;
                      }}
                      alt={news.title_hindi || "मुख्यमंत्री समाचार"}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        maxWidth: "12rem",
                        objectFit: "cover",
                        borderRadius: "5%",
                      }}
                    />
                    <div className="p-3 d-flex flex-column justify-content-between">
                      <div>
                        <h6
                          className="fw-bold mb-2"
                          style={{ fontSize: "13px", cursor: "pointer" }}
                        >
                          {news.title_hindi}
                        </h6>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "11px" }}
                      >
                        <i className="bi bi-clock me-1"></i>
                        {new Date(news.publish_date).toLocaleDateString(
                          "hi-IN",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        ) +
                          " " +
                          new Date(news.publish_date).toLocaleTimeString(
                            "hi-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmAllNews;
