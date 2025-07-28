
import React from 'react';
import '../../Styles/Topbar.css';

const TopBar = () => {
  return (
    <div className="py-1 top-bar" style={{ backgroundColor: '#343a40', fontSize: '10px' }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <span className="me-2 fw-bold text-light">
              जनसंपर्क विभाग, छत्तीसगढ़ शासन |
            </span>
            <span className="fw-bold text-light">
              Public Relations Department, Government of Chhattisgarh |
            </span>
          </div>

          {/* Right side buttons */}
          <div
            className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-end gap-1"
            style={{ fontSize: '10px' }}
          >
            {/* Language dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-warning btn-xs px-2 py-1 fw-bold"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '10px' }}
              >
                <i className="bi bi-translate"></i> हिंदी
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                  <a className="dropdown-item fw-bold" href="#">English</a>
                </li>
              </ul>
            </div>

            {/* Accessibility dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-danger btn-xs px-2 py-1 fw-bold"
                type="button"
                id="accessibilityDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '10px' }}
              >
                <i className="bi bi-person-wheelchair"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="accessibilityDropdown">
                <li><a className="dropdown-item fw-bold" href="#">A</a></li>
                <li><a className="dropdown-item fw-bold" href="#">A-</a></li>
                <li><a className="dropdown-item fw-bold" href="#">A+</a></li>
              </ul>
            </div>

            {/* e-Employment */}
            <span
              className="btn btn-danger btn-xs px-2 py-1 fw-bold"
              style={{ fontSize: '10px' }}
            >
              e-रोजगार और निर्माण
            </span>

            {/* Telegram */}
            <span
              className="btn btn-primary btn-xs px-2 py-1 fw-bold d-flex align-items-center"
              style={{ fontSize: '10px' }}
            >
              <i className="bi bi-telegram"></i>&nbsp;Telegram
            </span>

            {/* WhatsApp */}
            <span
              className="btn btn-success btn-xs px-2 py-1 fw-bold d-flex align-items-center"
              style={{ fontSize: '10px' }}
            >
              <i className="bi bi-whatsapp"></i>&nbsp;Whatsapp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
