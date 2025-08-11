const express=require("express");
const { getDistricts } = require("../controllers/District.controller");


const router=express.Router();
 router.get("/get-districts",getDistricts)


module.exports = router;

