// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import "../../Styles/NavBar.css"; // Make sure this CSS file has the dropdown styles below

// const NavBar = () => {
//   const [menus, setMenus] = useState([]);
//   const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

//   // State to track the index of the currently hovered menu
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     const fetchMenus = async () => {
//       try {
//         const res = await axios.get("http://localhost:3081/api/menubar/get-menubar");
//         setMenus(res.data.data);
//       } catch (err) {
//         console.error("Failed to fetch menus:", err);
//       }
//     };

//     fetchMenus();
//   }, []);

//   const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);
//   const closeNavbar = () => setIsNavbarCollapsed(true);

//   return (
//     <div
//       style={{
//         position: "sticky",
//         top: "0",
//         zIndex: "1030",
//         width: "100%",
//         background: "linear-gradient(to right, rgba(171, 231, 198, 0.93), #f3ad3c)",
//       }}
//     >
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container-fluid">
//           <NavLink
//             to="/"
//             className="navbar-brand fw-bold fs-4"
//             style={{ color: "rgb(88, 58, 58)" }}
//             onClick={closeNavbar}
//           >
//             <i className="bi bi-house-fill me-2 nav-link"></i>
//           </NavLink>

//           {/* Mobile Toggle Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNavbar}
//             aria-expanded={!isNavbarCollapsed}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className={`collapse navbar-collapse ${!isNavbarCollapsed ? "show" : ""}`}
//             id="mainNavbar"
//           >
//             {/* Close button for mobile view */}
//             <div className="d-lg-none text-end mt-3">
//               <button
//                 className="btn btn-sm btn-danger bi-x-square"
//                 onClick={closeNavbar}
//               ></button>
//             </div>

//             {/* Main Menu Items with Dropdown Logic */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {menus.map((menu, idx) => (
//                 <li
//                   className="nav-item dropdown" // Use 'dropdown' class for CSS targeting
//                   key={idx}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <NavLink
//                     to={menu.menu_link || "#"}
//                     className="nav-link text-white text-lg-dark"
//                     onClick={closeNavbar}
//                   >
//                     {menu.menu_hindi}
//                   </NavLink>

//                   {/* Conditionally render submenu on hover */}
//                   {hoveredIndex === idx && menu.submenus && menu.submenus.length > 0 && (
//                     <ul className="dropdown-menu">
//                       {menu.submenus.map((sub) => (
//                         <li key={sub.submenu_hindi}>
//                            <NavLink
//                             to={sub.submenu_link || "#"}
//                             className="dropdown-item"
//                             onClick={closeNavbar} // Also close navbar on submenu click
//                           >
//                             {sub.submenu_hindi}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* Right-side icons */}
//             <div className="d-flex">
//               <i
//                 className="bi bi-search fw-bold fs-5 me-3 nav-link p-2"
//                 style={{ cursor: "pointer" }}
//               ></i>
//               <i
//                 className="bi bi-grid-3x3-gap fw-bold fs-5 me-3 nav-link"
//                 style={{ cursor: "pointer" }}
//               ></i>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";

const NavBar = () => {
  const [menus, setMenus] = useState([]);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3081/api/menubar/get-menubar"
        );
        setMenus(res.data.data);
      } catch (err) {
        console.error("Failed to fetch menus:", err);
      }
    };

    fetchMenus();
  }, []);

  const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);
  const closeNavbar = () => setIsNavbarCollapsed(true);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1030",
        width: "100%",
        background:
          "linear-gradient(to right, rgba(171, 231, 198, 0.93), #f3ad3c)",
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

          <div
            className={`collapse navbar-collapse ${
              !isNavbarCollapsed ? "show" : ""
            }`}
            id="mainNavbar"
          >
            {/* Close button for mobile view */}
            <div className="d-lg-none text-end mt-3">
              <button
                className="btn btn-sm btn-danger bi-x-square"
                onClick={closeNavbar}
              ></button>
            </div>

            {/* Main Menu Items with Dropdown Logic */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menus.map((menu, idx) => (
                <li
                  className="nav-item dropdown"
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <NavLink
                    to={menu.page_url_hindi || "#"}
                    className="nav-link text-white text-lg-dark"
                    onClick={closeNavbar}
                  >
                    {menu.menu_hindi}
                  </NavLink>

                  {/* Dropdown for submenus or districts */}
                  {hoveredIndex === idx && (
                    <ul className="dropdown-menu">
                      {/* Show submenus if they exist */}
                      {menu.submenus &&
                        menu.submenus.length > 0 &&
                        menu.submenus.map((sub) => (
                          <li key={sub.submenu_hindi}>
                            <NavLink
                              to={sub.page_url_hindi || "#"}
                              className="dropdown-item"
                              onClick={closeNavbar}
                            >
                              {sub.submenu_hindi}
                            </NavLink>
                          </li>
                        ))}

                      {/* If no submenus, show districts */}

                      {(!menu.submenus || menu.submenus.length === 0) &&
                        menu.districts &&
                        menu.districts.length > 0 && (
                          <div className=" district-multicol ">
                            <div className="">
                              {menu.districts.map((dist) => (
                                <div key={dist.id} className="district-item">
                                  <NavLink
                                    to={`/district/${dist.id}`}
                                    className="district-link"
                                    onClick={closeNavbar}
                                    title={dist.district_hindi}
                                  >
                                    {dist.district_hindi}
                                  </NavLink>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}


                      {(!menu.submenus || menu.submenus.length === 0) &&
                        (!menu.districts || menu.districts.length === 0) &&
                        menu.categories &&
                        menu.categories.length > 0 && (
                          <div className="category-multicol">
                            {menu.categories.map((cat) => (
                              <div className="category-item" key={cat.id}>
                                <NavLink
                                  to={`/category/${cat.id}`}
                                  className="category-link"
                                  onClick={closeNavbar}
                                >
                                  {cat.category_hindi}
                                </NavLink>
                              </div>
                            ))}
                          </div>
                        )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right-side icons */}
            <div className="d-flex">
              <i
                className="bi bi-search fw-bold fs-5 me-3 nav-link p-2"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="bi bi-grid-3x3-gap fw-bold fs-5 me-3 nav-link"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
