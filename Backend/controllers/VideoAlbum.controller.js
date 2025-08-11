const { pool, poolConnect } = require("../database/dbConfig");

const getVideoAlbum = async (req, res) => {
  try {
    await poolConnect;
    const result = await pool.request().query(`
      SELECT id, title_hindi, video_code_hindi,createdtime
      FROM videos
      WHERE is_hidden = 1
      ORDER BY createdtime DESC;
    `);
    return res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error Fetching VideosAlbum:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  getVideoAlbum,
};
