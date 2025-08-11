const { pool, poolConnect } = require("../database/dbConfig");

const getPhotoAlbum = async (req, res) => {
    try {
        await poolConnect;
        const result = await pool
            .request()
            .query(
                `SELECT image_url, album_name_hindi
                 FROM album 
                 WHERE is_active IN ('1', 'Y') 
                 ORDER BY createdtime DESC`
            );
        return res.status(200).json(result.recordset);
    } catch (error) {
        console.error("Error fetching PhotoAlbum:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = {
    getPhotoAlbum
};