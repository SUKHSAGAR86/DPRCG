const express=require("express");
const { getMenuBar } = require("../controllers/Menubar.controller");


const router=express.Router();
router.get("/get-menubar",getMenuBar)

module.exports=router;