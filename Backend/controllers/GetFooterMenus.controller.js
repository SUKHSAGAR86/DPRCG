const { poolConnect, pool, sql } = require("../database/dbConfig");

// Get all footerMenus
const getFooterMenus = async (req, res) => {
  try {
    await poolConnect; // ensures that the pool has connected

    const result = await pool.request().query("SELECT * FROM footer_menus");
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Error fetching footerMenus:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Export the controller functions
module.exports = {
  getFooterMenus,
};
