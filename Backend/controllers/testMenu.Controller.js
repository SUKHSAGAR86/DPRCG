// const sql = require("../database/dbConfig");

// const getMenuHtml = async (req, res) => {
//     try {
//         const result = await sql.query("SELECT html_content FROM PortalMenu WHERE id = 1");
//         res.json({ html: result.recordset && result.recordset[0] ? result.recordset[0].html_content : null });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     getMenuHtml
// };



// controllers/menu.controller.js




const { pool, poolConnect } = require("../database/dbConfig");

const getMenuHtml = async (req, res) => {
  try {
    await poolConnect; // Wait until DB connection is ready

    const result = await pool.request().query("SELECT * FROM PortalMenu WHERE id = 1");

    const row = result.recordset?.[0];

    console.log("Fetched row from PortalMenu:", row); // 🪵 Log full row for debugging

    // Use the actual column that contains the HTML — change 'menu_html' if needed
    res.json({
      html: row?.menu_Hi || null, // replace with correct column name
    });
  } catch (error) {
    console.error("Error in getMenuHtml:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMenuHtml,
};
