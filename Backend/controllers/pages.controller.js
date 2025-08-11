const { pool, poolConnect, sql } = require("../database/dbConfig");

// Get all pages
const getPages = async (_req, res) => {
  try {
    await poolConnect;
    const result = await pool.request().query("select * from pages");
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Error fetching pages:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// Get page by ID
const getPageById = async (req, res) => {
  try {
    await poolConnect;
    const pageId = parseInt(req.params.id);

    const result = await pool
      .request()
      .input("PageId", sql.Int, pageId)
      .query("select * from pages WHERE id = @PageId");

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json(result.recordset[0]);
  } catch (err) {
    console.error("Error fetching page:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = {
  getPages,
  getPageById,
};
