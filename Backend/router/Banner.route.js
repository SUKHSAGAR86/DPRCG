const express=require("express");
const { getBanners } = require("../controllers/Banner.controller");


const router=express.Router();

router.get("/get-banners",getBanners)



module.exports=router;