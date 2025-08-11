const express=require("express");
const { getPublication } = require("../controllers/Publication.contoller");


const router=express.Router();
router.get("/get-publication",getPublication);

module.exports=router;