// import React from 'react';

// const Navigation = () => {
//   return (
//     <div
//       style={{
//         position: 'sticky',
//         top: '0',
//         zIndex: '1030',
//         width: '100%',
//         background: 'linear-gradient(to right, rgba(171, 231, 198, 0.93), #f3ad3c)',
        
//       }}
//     >
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container-fluid">
//           {/* Left icon (home) */}
//           <a href="#" className="navbar-brand text-white fs-4">
//             <i className="bi bi-house-fill me-2"></i>
//           </a>

//           {/* Toggle button for small screens */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mainNavbar"
//             aria-controls="mainNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible nav content */}
//           <div className="collapse navbar-collapse" id="mainNavbar">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* Normal links */}
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#">राज्यपाल</a>
//               </li>

//               {/* Dropdowns */}
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white" href="#" id="cmDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   मुख्यमंत्री
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="cmDropdown">
//                   <li><a className="dropdown-item" href="#">मुख्यमंत्री 1</a></li>
//                   <li><a className="dropdown-item" href="#">मुख्यमंत्री 2</a></li>
//                 </ul>
//               </li>

//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white" href="#" id="cabinetDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   मंत्रिपरिषद
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="cabinetDropdown">
//                   <li><a className="dropdown-item" href="#">मंत्री 1</a></li>
//                   <li><a className="dropdown-item" href="#">मंत्री 2</a></li>
//                 </ul>
//               </li>

//               <li className="nav-item"><a className="nav-link text-white" href="#">आलेख</a></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">सफलता की कहानी</a></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">ऑनलाइन विज्ञापन</a></li>

//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white" href="#" id="districtDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   जिले के समाचार
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="districtDropdown">
//                   <li><a className="dropdown-item" href="#">जिला 1</a></li>
//                   <li><a className="dropdown-item" href="#">जिला 2</a></li>
//                   <li><a className="dropdown-item" href="#">जिला 3</a></li>
//                 </ul>
//               </li>

//               <li className="nav-item"><a className="nav-link text-white" href="#">फोटो</a></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">वीडियो</a></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">फिल्म</a></li>
//             </ul>

//             {/* Right icons */}
//             <div className="d-flex align-items-center">
//               <i className="bi bi-search text-white fs-5 me-3"></i>
//               <i className="bi bi-grid-3x3-gap text-white fs-5 me-3"></i>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Navigation.css';

const Navigation = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '1030',
        width: '100%',
        background: 'linear-gradient(to right, rgba(171, 231, 198, 0.93), #f3ad3c)',
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand  fw-bold fs-4" style={{ color: "rgb(88, 58, 58)" }}>
            <i className="bi bi-house-fill me-2"></i>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/governor" className="nav-link">राज्यपाल</NavLink>
              </li>

              {/* मुख्यमंत्री dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
                  id="cmDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  मुख्यमंत्री
                </button>
                <ul className="dropdown-menu" aria-labelledby="cmDropdown">
                  <li><NavLink to="/cm-1" className="dropdown-item">मुख्यमंत्री 1</NavLink></li>
                  <li><NavLink to="/cm-2" className="dropdown-item">मुख्यमंत्री 2</NavLink></li>
                </ul>
              </li>

              {/* मंत्रिपरिषद dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
                  id="cabinetDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  मंत्रिपरिषद
                </button>
                <ul className="dropdown-menu" aria-labelledby="cabinetDropdown">
                  <li><NavLink to="/minister-1" className="dropdown-item">मंत्री 1</NavLink></li>
                  <li><NavLink to="/minister-2" className="dropdown-item">मंत्री 2</NavLink></li>
                </ul>
              </li>

              <li className="nav-item"><NavLink to="/articles" className="nav-link">आलेख</NavLink></li>
              <li className="nav-item"><NavLink to="/success" className="nav-link">सफलता की कहानी</NavLink></li>
              <li className="nav-item"><NavLink to="/ads" className="nav-link">ऑनलाइन विज्ञापन</NavLink></li>

              {/* जिले के समाचार dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
                  id="districtDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  जिले के समाचार
                </button>
                <ul className="dropdown-menu" aria-labelledby="districtDropdown">
                  <li><NavLink to="/district-1" className="dropdown-item">जिला 1</NavLink></li>
                  <li><NavLink to="/district-2" className="dropdown-item">जिला 2</NavLink></li>
                </ul>
              </li>

              <li className="nav-item"><NavLink to="/photos" className="nav-link">फोटो</NavLink></li>
              <li className="nav-item"><NavLink to="/videos" className="nav-link">वीडियो</NavLink></li>
              <li className="nav-item"><NavLink to="/films" className="nav-link">फिल्म</NavLink></li>
            </ul>

            {/* Right side icons */}
            <div className="d-flex align-items-center"  style={{ color: "rgb(88, 58, 58)" }} >
              <i className="bi bi-search  fw-bold fs-5 me-3"></i>
              <i className="bi bi-grid-3x3-gap fw-bold fs-5 me-3"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
