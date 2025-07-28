// const { error } = require("console");
// const {pool, poolConnect,sql}=require("../database/dbConfig");
  
// const getHiGetMenuProcedure=async(req,res)=>{

//     try{
//         await poolConnect;
//         const request=pool.request();

//         if(req.query.paramName !==undefined){
//             request.input("paramName", sql.VarChar,req.query.paramName);

//         }
//         const result=await request.execute("Hi_GetMenu");
//     } catch(err){
//         res.status(500).json({error:err.message});
//     }
// };




// module.exports={
//     getHiGetMenuProcedure
// };



const { pool, poolConnect, sql } = require("../database/dbConfig");

const getHiGetMenuProcedure = async (req, res) => {
    const { paramName } = req.query;
    
    try {
        // Validate connection
        if (!pool.connected) {
            await poolConnect;
        }

        const request = pool.request();
        
        // Add parameter only if provided
        if (paramName !== undefined && paramName !== '') {
            request.input("paramName", sql.VarChar(100), paramName);
        }

        // Execute procedure
        const result = await request.execute("Hi_GetMenu");
        
        // Handle empty response
        if (!result.recordset || result.recordset.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No data available",
                data: []
            });
        }

        // Successful response
        res.json({
            success: true,
            data: result.recordset
        });

    } catch (error) {
        console.error("[HiGetMenu Error]", error);
        res.status(500).json({
            success: false,
            message: "Database operation failed",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = { getHiGetMenuProcedure };