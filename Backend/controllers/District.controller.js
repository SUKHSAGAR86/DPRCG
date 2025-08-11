const {pool, poolConnect, sql} = require("../database/dbConfig");
const getDistricts=async(req,res)=>{
    try {
await poolConnect; 
        const request = pool.request();
        const result = await request.query("SELECT * FROM district");
        res.json(result.recordset);
    } catch (error) {
        console.error("Error fetching districts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getDistricts
};


