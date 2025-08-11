const express=require("express");
const { getNotice } = require("../controllers/Notice.controller");


const router=express.Router();

router.get("/get-notice",getNotice);


module.exports=router;