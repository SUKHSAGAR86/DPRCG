

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../../Styles/NavBar.css';

// const NavBar = () => {
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
//           <NavLink to="/" className="navbar-brand  fw-bold fs-4" style={{ color: "rgb(88, 58, 58)" }}>
//             <i className="bi bi-house-fill me-2"></i>
//           </NavLink>

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

//           <div className="collapse navbar-collapse" id="mainNavbar">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink to="/governor" className="nav-link">राज्यपाल</NavLink>
//               </li>

//               {/* मुख्यमंत्री dropdown */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
//                   id="cmDropdown"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   मुख्यमंत्री
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="cmDropdown">
//                   <li><NavLink to="/cm-1" className="dropdown-item">मुख्यमंत्री 1</NavLink></li>
//                   <li><NavLink to="/cm-2" className="dropdown-item">मुख्यमंत्री 2</NavLink></li>
//                 </ul>
//               </li>

//               {/* मंत्रिपरिषद dropdown */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
//                   id="cabinetDropdown"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   मंत्रिपरिषद
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="cabinetDropdown">
//                   <li><NavLink to="/minister-1" className="dropdown-item">मंत्री 1</NavLink></li>
//                   <li><NavLink to="/minister-2" className="dropdown-item">मंत्री 2</NavLink></li>
//                 </ul>
//               </li>

//               <li className="nav-item"><NavLink to="/articles" className="nav-link">आलेख</NavLink></li>
//               <li className="nav-item"><NavLink to="/success" className="nav-link">सफलता की कहानी</NavLink></li>
//               <li className="nav-item"><NavLink to="/ads" className="nav-link">ऑनलाइन विज्ञापन</NavLink></li>

//               {/* जिले के समाचार dropdown */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle btn btn-link text-white fw-bold"
//                   id="districtDropdown"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   जिले के समाचार
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="districtDropdown">
//                   <li><NavLink to="/district-1" className="dropdown-item">जिला 1</NavLink></li>
//                   <li><NavLink to="/district-2" className="dropdown-item">जिला 2</NavLink></li>
//                 </ul>
//               </li>

//               <li className="nav-item"><NavLink to="/photos" className="nav-link">फोटो</NavLink></li>
//               <li className="nav-item"><NavLink to="/videos" className="nav-link">वीडियो</NavLink></li>
//               <li className="nav-item"><NavLink to="/films" className="nav-link">फिल्म</NavLink></li>
//             </ul>

//             {/* Right side icons */}
//             <div className="d-flex align-items-center"  style={{ color: "rgb(88, 58, 58)" }} >
//               <i className="bi bi-search  fw-bold fs-5 me-3"></i>
//               <i className="bi bi-grid-3x3-gap fw-bold fs-5 me-3"></i>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;







import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/NavBar.css';

const NavBar = () => {
  const [menus, setMenus] = useState([]);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get('http://localhost:3081/api/menubar/get-menubar');
        setMenus(res.data);
      } catch (err) {
        console.error('Failed to fetch menus:', err);
      }
    };

    fetchMenus();
  }, []);

  const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);
  const closeNavbar = () => setIsNavbarCollapsed(true);

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
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-4"
            style={{ color: "rgb(88, 58, 58)" }}
            onClick={closeNavbar}
          >
            <i className="bi bi-house-fill me-2 nav-link"></i>
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="mainNavbar">
            {/* Close button for mobile view */}
            <div className="d-lg-none text-end  mt-3">
              <button className="btn btn-sm btn-danger bi-x-square" onClick={closeNavbar}>
                
              </button>
            </div>
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menus.map((menu, idx) => (
                <li className="nav-item" key={idx}>
                  <NavLink
                    to={menu.menu_link || "#"}
                    className="nav-link text-white text-lg-dark"
                    activeClassName="active"
                    onClick={closeNavbar}
                  >
                    {menu.menu_hindi}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right-side icons */}
            <div className="d-flex ">
              <i className="bi bi-search fw-bold fs-5 me-3  nav-link p-2"style={{cursor:"pointer"}}></i>
              <i className="bi bi-grid-3x3-gap fw-bold fs-5 me-3  nav-link" style={{cursor:"pointer"}}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
