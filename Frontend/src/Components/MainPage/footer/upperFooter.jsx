import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/UpperFooter.css';
import FooterBgImage from "../../../assets/image/footerbg.jpg";
import FooterMenu from './FooterMenu';


const UpperFooter = () => {
  const importantLinks = [
    { text: 'विभागीय वार्षिक प्रशासनिक प्रतिवेदन', path: '/annual-report' },
    { text: 'अचल संपत्ति का विवरण', path: '/property-details' },
    { text: 'अधिसूचना (सूचना के अधिकार)', path: '/notifications' },
    { text: 'जनसंपर्क विभाग 25 बिंदु मैन्युअल', path: '/manual-25' },
    { text: 'राजपत्रित अधिकारियों की पदस्थ सूची', path: '/gazetted-officers' },
    { text: 'तृतीय/चतुर्थ श्रेणी के कर्मचारियों की पदस्थ सूची', path: '/employee-list' },
  ];

  const otherLinks = [
    { text: 'छत्तीसगढ़ बजट', path: '/budget' },
    { text: 'विज्ञापन संबंधित', path: '/ads' },
    { text: 'प्रदर्शन विज्ञापन', path: '/display-ads' },
    { text: 'डायरेक्टरी', path: '/directory' },
    { text: 'अधिमान्यता ऑनलाइन', path: '/accreditation-online' },
    { text: 'अधिमान्यता संबंधित', path: '/accreditation-info' },
  ];

 
  const socialMedia = [
    { icon: 'facebook', path: '/facebook' },
    { icon: 'twitter-x', path: '/twitter' },
    { icon: 'youtube', path: '/youtube' },
    { icon: 'instagram', path: '/instagram' },
    { icon: 'linkedin', path: '/linkedin' },
    { icon: 'wifi', path: '/rss' },
  ];

  return (
    <>
      {/* Social Media Bar */}
      <div className="container-fluid py-2" style={{ background: 'linear-gradient(to right, rgb(150, 0, 0), #fbb034)' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
            {socialMedia.map(({ icon, path }, idx) => (
              <Link key={idx} to={path} title={icon} className="text-white">
                <span className={`bi bi-${icon} fs-4 social-hover`}></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div style={{ backgroundImage: `url(${FooterBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-white py-5">
          <div className="row">
            {/* Column 1 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="fw-bold mb-3">महत्वपूर्ण वेब लिंक</h5>
              <ul className="list-unstyled small">
                {importantLinks.map(({ text, path }, idx) => (
                  <li key={idx} className="mb-2 footerItem">
                    <Link to={path} className="text-white text-decoration-none footer-link">• {text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <ul className="list-unstyled small mt-md-4 mt-lg-0">
                {otherLinks.map(({ text, path }, idx) => (
                  <li key={idx} className="mb-2 footerItem">
                    <Link to={path} className="text-white text-decoration-none footer-link">• {text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Map */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="rounded-4 overflow-hidden shadow-lg border border-light">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65315.98246077769!2d81.71389040085705!3d21.299059188133718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4a3eb988f3%3A0xd74a730b4bd71ea1!2sDPR%20Chhattisgarh!5e1!3m2!1sen!2sin!4v1751885264477!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DPR Chhattisgarh Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="fw-bold mb-3">संपर्क करे</h5>
              <div className="d-flex footerItem mb-3">
                <span className="bi bi-geo-alt-fill me-3 fs-5"></span>
                <p className="mb-0">
                  छत्तीसगढ़ जनसंपर्क<br />
                  छोटापारा, वार्ड नं.-46<br />
                  रायपुर, छत्तीसगढ़, 492001
                </p>
              </div>
              <div className="d-flex footerItem mb-3">
                <span className="bi bi-telephone-outbound-fill me-3 fs-5"></span>
                <span>+91-771-2221614</span>
              </div>
              <a href="mailto:dprcgh@gmail.com" className="text-white text-decoration-none">
                <div className="d-flex footerItem">
                  <span className="bi bi-envelope-at-fill me-3 fs-5"></span>
                  <span>dprcgh@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
     <FooterMenu />
    
    </>
  );
};

export default UpperFooter;
