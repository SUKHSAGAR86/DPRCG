// const express=require("express");
// const { getMenuBar } = require("../controllers/Menubar.controller");


// const router=express.Router();
// router.get("/get-menubar",getMenuBar)

// module.exports=router;



const express = require("express");
const router = express.Router();

const { getMenuBar } = require("../controllers/menubar.controller");


router.get("/get-menubar", getMenuBar);
// 

module.exports = router;
