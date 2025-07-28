// const express=require("express");
// const { getHiGetMenuProcedure } = require("../controllers/HiGetMenu_procedure.controller");

// const router=express.Router();

// router.get("/get-higetmenu",getHiGetMenuProcedure);

// module.exports=router;

const express = require("express");
const router = express.Router();
const { getHiGetMenuProcedure } = require("../controllers/HiGetMenu_procedure.controller");

// /**
//  * @route GET /api/procedure/get-higetmenu
//  * @description Retrieve menu data from stored procedure
//  * @param {string} req.query.paramName - Optional filter parameter
//  * @returns {object} 200 - Success response with menu data
//  * @returns {object} 500 - Database error response
//  */
router.get("/get-higetmenu", getHiGetMenuProcedure);

module.exports = router;