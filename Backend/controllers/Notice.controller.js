const {pool,poolConnect}=require("../database/dbConfig");

const getNotice= async (req,res)=>{
    try {
        await poolConnect;
        const result = await pool
          .request()
          .query(
            `select id,title_hindi,file_type_hindi,file_path_hindi,createdtime from notices where status_hindi=1 Order by createdtime DESC`
          );
          res.status(200).json(result.recordset);
        
    } catch (error) {
        console.error('Error Fetching Notices Table :',error);
        res.status(500).json({error:"Internal Server Error"});
        
    }
};

module.exports=
{
    getNotice,
}