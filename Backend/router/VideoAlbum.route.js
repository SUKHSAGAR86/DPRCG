const express=require("express");
const { getVideoAlbum } = require("../controllers/VideoAlbum.controller");

const router=express.Router();
router.get("/get-videoalbum",getVideoAlbum);


module.exports=router;
