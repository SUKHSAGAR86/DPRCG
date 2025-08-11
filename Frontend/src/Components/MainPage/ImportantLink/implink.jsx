
import React from "react";
import "./implink.css";

const links = [
  {
    icon: "bi-newspaper",
    title: "आज के समाचार",
    href: "/todaynews",
  },
  {
    icon: "bi-badge-ad-fill",
    title: "विज्ञापन संबंधित",
    href: "https://example.com/ads",
  },
  {
    icon: "bi-eye-fill",
    title: "प्रदर्शन विज्ञापन",
    href: "https://example.com/display-ads",
  },
  {
    icon: "bi-globe",
    title: "सरकारी वेबसाइट",
    href: "https://example.com/gov",
  },
  {
    icon: "bi-bar-chart",
    title: "आँकड़े और रिपोर्ट",
    href: "https://example.com/stats",
  },
  {
    icon: "bi-megaphone-fill",
    title: "नवीन घोषणाएं",
    href: "https://example.com/announcements",
  },
  {
    icon: "bi-telephone-fill",
    title: "संपर्क करें",
    href: "https://example.com/contact",
  },
  {
    icon: "bi-book",
    title: "मार्गदर्शिका",
    href: "https://example.com/guide",
  },
  {
    icon: "bi-calendar-event",
    title: "ईवेंट्स",
    href: "https://example.com/events",
  },
];

const Implink = () => {
  return (
    <div className="container-fluid py-4 important-links-section">
      <h4 className="text-center fw-bold mt-2">
        <span className="bi bi-link-45deg" style={{ fontSize: "36px" }}></span>{" "}
        महत्वपूर्ण लिंक
      </h4>

      <div className="row justify-content-center mt-4">
        {links.map((link, index) => (
          <div className="col-6 col-sm-4 col-md-4 col-lg-3 mb-4" key={index}>
            <a
              href={link.href}
              className="text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card h-100 shadow link-card text-center">
                <div className="link-icon-wrapper">
                  <i className={`bi ${link.icon} link-icon`}></i>
                </div>
                <p>{link.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Implink;
