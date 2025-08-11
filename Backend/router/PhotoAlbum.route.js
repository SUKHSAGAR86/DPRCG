const express=require("express");
const { getPhotoAlbum } = require("../controllers/PhotoAlbum.controller");


const router=express.Router()

router.get("/get-photoalbum",getPhotoAlbum);

module.exports=router;