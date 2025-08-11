const {pool,poolConnect}=require("../database/dbConfig")

const getTanders= async (req,res)=>{
    try {
        await poolConnect;
        const result = await pool
          .request()
          .query(
            `SELECT id,title_hindi, file_type_hindi, file_path_hindi FROM tenders where status_hindi='1' Order By createdtime DESC`
          );
          res.status(200).json(result.recordset)
        // console.log(result.recordset);
    } catch (error) {
        console.error("Error Fetching Tenders Table:",error);
        res.status(500).json({error:"Internal Server Error"})
        
    }
}
module.exports={
    getTanders
}