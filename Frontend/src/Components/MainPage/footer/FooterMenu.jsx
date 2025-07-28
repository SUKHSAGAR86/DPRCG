// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../../Styles/UpperFooter.css';
// import BottomFooter from './BottomFooter';


// const footerLinks = [
//     { text: 'Feedback', path: '/feedback' },
//     { text: 'अभिगम्यता विवरण', path: '/accessibility' },
//     { text: 'नियम और शर्ते', path: '/terms' },
//     { text: 'संपर्क करें', path: '/contact' },
//     { text: 'तकनीकी सहायता', path: '/tech-support' },
//     { text: 'वेब सूचना प्रबंधक', path: '/web-manager' },
//     { text: 'उपयोग की शर्ते', path: '/usage-terms' },
//     { text: 'सर्वाधिकार नीति', path: '/copyright-policy' },
// ];

// const FooterMenu = () => {
//   return (
//     <div className="container-fluid p-3" style={{ backgroundColor: '#3d3d3d', fontSize: '11px' }}>
//       <div className="container">
//         <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-2 mb-2">
//           {footerLinks.map(({ text, path }, idx) => (
//             <li key={idx}>
//               <Link to={path} className="text-decoration-none text-white footer-link">
//                 {text}
//               </Link>
//               {idx < footerLinks.length - 1 && <span className="mx-2 text-white">|</span>}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <hr style={{ border: 'none', height: '2px', backgroundColor: '#000', borderRadius: '5px' }} />
//         <BottomFooter/>
//     </div>
//   );
// };

// export default FooterMenu;

import React, { useEffect, useState } from 'react';
import '../../../Styles/UpperFooter.css';
import BottomFooter from './BottomFooter';
import axios from 'axios';

const FooterMenu = () => {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3081/api/footermenus/get-footermenus') 
      .then(response => setFooterLinks(response.data))
      .catch(error => console.error('Error fetching footer menus:', error));
  }, []);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: '#3d3d3d', fontSize: '11px' }}>
      <div className="container">
        <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-2 mb-2">
          {footerLinks.map(({ menu_hindi, page_url_hindi }, idx) => (
            <li key={idx}>
              <a
                href={page_url_hindi}
             
                rel="noopener noreferrer"
                className="text-decoration-none text-white footer-link"
              >
                {menu_hindi}
              </a>
              {idx < footerLinks.length - 1 && <span className="mx-2 text-white">|</span>}
            </li>
          ))}
        </ul>
      </div>
      <hr style={{ border: 'none', height: '2px', backgroundColor: '#000', borderRadius: '5px' }} />
      <BottomFooter />
    </div>
  );
};

export default FooterMenu;
