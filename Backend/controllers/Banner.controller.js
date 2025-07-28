const {pool,poolConnect,sql} = require("../database/dbConfig");
//Get All Banners 

const getBanners = async (req, res) => {
    try {
        await poolConnect; // ensures that the pool has connected
    
        const result = await pool.request().query("SELECT * FROM banners");
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error("Error fetching banners:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}


module.exports = {
    getBanners,     }
