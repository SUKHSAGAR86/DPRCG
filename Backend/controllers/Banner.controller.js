const {pool,poolConnect,sql} = require("../database/dbConfig");
//Get All Banners 

const getBanners = async (req, res) => {
    try {
        await poolConnect; 
    
        const result = await pool
          .request()
          .query(
            `SELECT * FROM banners where status ='1' Order By createdtime DESC `
          );
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error("Error fetching banners:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}


module.exports = {
    getBanners,     }
