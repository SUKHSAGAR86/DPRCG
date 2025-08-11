// const { pool, poolConnect } = require("../database/dbConfig");

// // Get all MenuLists
// const getMenuBar = async (req, res) => {
//   try {
//     await poolConnect;
//     const menuResult = await pool
//       .request()
//       .query("SELECT id, menu_hindi, page_url_hindi FROM menus WHERE status=1;");
//     const submenuResult = await pool
//       .request()
//       .query(
//         "SELECT menu_id, submenu_hindi, page_url_hindi FROM submenus WHERE status=1;"
//       );

//     const menus = menuResult.recordset;
//     const submenus = submenuResult.recordset;

//     // Build the final navigation structure
//     const navigation_menu = menus.map((menu) => {
//       const relatedSubmenus = submenus.filter((sub) => sub.menu_id === menu.id);
//       return {
//         id: menu.id,
//         menu_hindi: menu.menu_hindi,
//         page_url_hindi: menu.page_url_hindi,

//         submenus: relatedSubmenus.map((sub) => ({
//           submenu_hindi: sub.submenu_hindi,
//           page_url_hindi: sub.page_url_hindi,
//         })),
//       };
//     });

//     res.status(200).json({ data: navigation_menu });
//   } catch (err) {
//     console.error("Error fetching MenuBar:", err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// };

// module.exports = {
//   getMenuBar,
// };

//-=-============================test================================

// const { pool, poolConnect } = require("../database/dbConfig");

// // Get all MenuLists
// const getMenuBar = async (req, res) => {
//   try {
//     await poolConnect;
//     const menuResult = await pool
//       .request()
//       .query(
//         "SELECT id, menu_hindi, page_url_hindi FROM menus WHERE status=1;"
//       );
//     const submenuResult = await pool
//       .request()
//       .query(
//         "SELECT menu_id, submenu_hindi, page_url_hindi FROM submenus WHERE status=1;"
//       );

//     // select id, menu_hindi,page_url_hindi from menus where id=17;
//     const districtResult = await pool
//       .request()
//       .query("select id,district_hindi from district where status=1;");

//     // console.log(districtResult);

//     const menus = menuResult.recordset;
//     const submenus = submenuResult.recordset;
//     const district = districtResult.recordset;

//     // Build the final navigation structure
//     const navigation_menu = menus.map((menu) => {
//       let relatedSubmenus = submenus.filter((sub) => sub.menu_id === menu.id);

//       return {
//         id: menu.id,
//         menu_hindi: menu.menu_hindi,
//         page_url_hindi: menu.page_url_hindi,

//         submenus: relatedSubmenus.map((sub) => ({
//           submenu_hindi: sub.submenu_hindi,
//           page_url_hindi: sub.page_url_hindi,
//         })),
//       };
//     });

//     res.status(200).json({ data: navigation_menu });
//   } catch (err) {
//     console.error("Error fetching MenuBar:", err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// };

// module.exports = {
//   getMenuBar,
// };


// const { pool, poolConnect } = require("../database/dbConfig");

// // Get all MenuLists
// const getMenuBar = async (req, res) => {
//   try {
//     await poolConnect;

//     // Fetch menus
//     const menuResult = await pool
//       .request()
//       .query(
//         "SELECT id, menu_hindi, page_url_hindi FROM menus WHERE status=1;"
//       );

//     // Fetch submenus
//     const submenuResult = await pool
//       .request()
//       .query(
//         "SELECT menu_id, submenu_hindi, page_url_hindi FROM submenus WHERE status=1;"
//       );

//     // Fetch districts (only once, not per menu)
//     const districtResult = await pool
//       .request()
//       .query("SELECT id, district_hindi FROM district WHERE status=1;");


//       // const categories = await pool
//       //   .request()
//       //   .query(`select id, category_hindi from categories where status=1`);


//     const menus = menuResult.recordset;
//     const submenus = submenuResult.recordset;
//     const districts = districtResult.recordset;
//     // const category=categories.recordset;

//     // Build the final navigation structure
//     const navigation_menu = menus.map((menu) => {
//       if (menu.id === 17) {
//         // If menu ID is 17, attach districts instead of submenus
//         return {
//           id: menu.id,
//           menu_hindi: menu.menu_hindi,
//           page_url_hindi: menu.page_url_hindi,
//           districts: districts.map((dist) => ({
//             id: dist.id,
//             district_hindi: dist.district_hindi,
//           })),
//         };
//       }
      
//       // if(menu_id===3){
//       //   return {
//       //     id: menu_id,
//       //     menu_hindi: menu.menu_hindi,
//       //     page_url_hindi: menu.page_url_hindi,
//       //     category: category.map((cate) => ({
//       //       id: cate.id,
//       //       category_hindi
//       //     })),
//       //   };
//       // }
      
//       else {
//         // Normal menu with submenus
//         const relatedSubmenus = submenus.filter(
//           (sub) => sub.menu_id === menu.id
//         );
//         return {
//           id: menu.id,
//           menu_hindi: menu.menu_hindi,
//           page_url_hindi: menu.page_url_hindi,
//           submenus: relatedSubmenus.map((sub) => ({
//             submenu_hindi: sub.submenu_hindi,
//             page_url_hindi: sub.page_url_hindi,
//           })),
//         };
//       }
//     });

//     res.status(200).json({ data: navigation_menu });
//   } catch (err) {
//     console.error("Error fetching MenuBar:", err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// };

// module.exports = { getMenuBar };



const { pool, poolConnect } = require("../database/dbConfig");

// Get all MenuLists
const getMenuBar = async (req, res) => {
  try {
    await poolConnect;

    // Fetch menus
    const menuResult = await pool
      .request()
      .query(
        "SELECT id, menu_hindi, page_url_hindi FROM menus WHERE status=1;"
      );

    // Fetch submenus
    const submenuResult = await pool
      .request()
      .query(
        "SELECT menu_id, submenu_hindi, page_url_hindi FROM submenus WHERE status=1;"
      );

    // Fetch districts
    const districtResult = await pool
      .request()
      .query("SELECT id, district_hindi FROM district WHERE status=1;");

    // Fetch categories
    const categoriesResult = await pool
      .request()
      .query("SELECT id, category_hindi FROM categories WHERE status=1;");

    const menus = menuResult.recordset;
    const submenus = submenuResult.recordset;
    const districts = districtResult.recordset;
    const categories = categoriesResult.recordset;

    // Build the final navigation structure
    const navigation_menu = menus.map((menu) => {
      if (menu.id === 17) {
        // Menu ID 17 → attach districts
        return {
          id: menu.id,
          menu_hindi: menu.menu_hindi,
          page_url_hindi: menu.page_url_hindi,
          districts: districts.map((dist) => ({
            id: dist.id,
            district_hindi: dist.district_hindi,
          })),
        };
      } else if (menu.id === 3) {
        // Menu ID 3 → attach categories
        return {
          id: menu.id,
          menu_hindi: menu.menu_hindi,
          page_url_hindi: menu.page_url_hindi,
          categories: categories.map((cate) => ({
            id: cate.id,
            category_hindi: cate.category_hindi,
          })),
        };
      } else {
        // Normal menu → attach related submenus
        const relatedSubmenus = submenus.filter(
          (sub) => sub.menu_id === menu.id
        );
        return {
          id: menu.id,
          menu_hindi: menu.menu_hindi,
          page_url_hindi: menu.page_url_hindi,
          submenus: relatedSubmenus.map((sub) => ({
            submenu_hindi: sub.submenu_hindi,
            page_url_hindi: sub.page_url_hindi,
          })),
        };
      }
    });

    res.status(200).json({ data: navigation_menu });
  } catch (err) {
    console.error("Error fetching MenuBar:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { getMenuBar };
