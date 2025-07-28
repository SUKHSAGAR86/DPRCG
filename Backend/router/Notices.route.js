const express = require('express');
const { getNotices } = require('../controllers/Notices.controler');


const router=express.Router();

router.get("/get-notices",getNotices);

module.exports=router;

