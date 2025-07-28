const {pool, poolConnect, sql} = require("../database/dbConfig");


// Get all MenuLists
const getMenuBar=async (req, res) => {
  try {
    await poolConnect; // ensures that the pool has connected

    const result = await pool.request().query("SELECT menu_hindi FROM menus");
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Error fetching MenuBar:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
}

module.exports = {
    getMenuBar
}