import React from 'react';
import nicLogo from '../../../assets/image/NIC_logo.svg.png'; // Adjust path if needed

const BottomFooter = () => {
  return (
    <div className="container-fluid text-white py-3">
      <div className="row text-center text-md-start align-items-center">
        {/* Logo */}
        <div className="col-12 col-md-2 mb-2 mb-md-0 text-center text-md-start">
          <img src={nicLogo} alt="NIC Logo" style={{ height: '2rem' }} />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-10 text-center">
          <p className="mb-1">
            कॉपीराइट © 2025 - सर्वाधिकार सुरक्षित- छत्तीसगढ़ जनसंपर्क संचालनालय की आधिकारिक वेबसाइट, छत्तीसगढ़ सरकार, भारत
          </p>
          <p className="mb-1">
            Website Content Managed by <strong>Ministry of Public Relations, Government of Chhattisgarh</strong>
          </p>
          <p className="mb-2">
            Designed, Developed and Hosted by{' '}
            <a
              href="http://www.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-underline"
            >
              <strong>National Informatics Centre</strong>
            </a>{' '}
            <strong>(NIC)</strong>
          </p>

          <div className="mt-2">
            <strong className="fw-bold">Last Updated: 11-07-2025</strong>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-around gap-3 mt-2">
            <div>
              <strong className="fw-bold">Today Hit Count :</strong>
            </div>
            <div>
              <strong className="fw-bold">Total Hit Count :</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
