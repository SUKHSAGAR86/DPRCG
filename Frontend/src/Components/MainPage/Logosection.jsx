import React from 'react';
import ratajvaeshlogo from '../../assets/image/ratajvaeshlogo.jpg'

const LogoSection = () => {
  return (
    <div className="container-fluid py-2 px-3 logo-section bg-white">
      <div className="row align-items-center justify-content-between">
        {/* Left logo and text */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coat_of_arms_of_Chhattisgarh.svg/2048px-Coat_of_arms_of_Chhattisgarh.svg.png"
            alt="Chhattisgarh Logo"
            height="60"
            className="me-3"
          />
          <div className="text-center text-md-start">
            <h5 className="fw-bold mb-0">छत्तीसगढ़ शासन</h5>
            <h6 className="fw-bold mb-0">जनसंपर्क विभाग</h6>
          </div>
        </div>

        {/* Right logo */}
        <div className="col-12 col-md-6 text-center text-md-end">
          <img
            src={ratajvaeshlogo}
            alt="Ratajvaesh Logo"
            height="60"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
