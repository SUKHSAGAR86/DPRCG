// controllers/Hi_GetNews_procedure.controller.js
const { poolConnect, pool, sql } = require("../database/dbConfig");

const getHiGetNewsProcedureData = async (req, res) => {
    try {
        await poolConnect;

        const request = pool.request();

        // Only add input if paramName is provided
        if (req.query.paramName !== undefined) {
            request.input("paramName", sql.VarChar, req.query.paramName);
        }

        const result = await request.execute("Hi_GetNews"); // Stored Procedure Name

        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {getHiGetNewsProcedureData};




// // controllers/Hi_GetNews_procedure.controller.js
// const { poolConnect, pool, sql } = require("../database/dbConfig");

// const getProcedureData = async (req, res) => {
//     try {
//         await poolConnect;

//         const result = await pool
//             .request()
//             // .input("paramName", sql.VarChar, req.query.paramName) // Uncomment if your SP takes parameters
//             .execute("Hi_GetNews"); // Stored Procedure Name

//         res.status(200).json(result.recordset);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// module.exports = { getProcedureData };

