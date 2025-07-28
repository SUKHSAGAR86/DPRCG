const {pool, poolConnect} = require("../database/dbConfig");

// Get all Notice
const getNotices = async (req, res) => {
    try {
        await poolConnect;
        const result = await pool.request().query("SELECT * FROM notices");
        res.status(200).json(result.recordset);

    } catch (err) {
        console.error("Error Faching Notices", err);
        res.status(500).json({message: "Internal Server Error", error: err.message});        
    }

}


module.exports={
    getNotices
}

