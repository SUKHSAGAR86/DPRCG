const express=require("express");
const { getCMNewsPosts } = require("../controllers/CmNews.controller");


const router=express.Router();
 router.get("/get-cmnews",getCMNewsPosts)

module.exports=router;