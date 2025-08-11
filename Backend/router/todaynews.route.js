const express=require('express');
const { getTodayAllPosts } = require('../controllers/todaynews.controller');


const router=express.Router();

router.get("/get-todaynews",getTodayAllPosts)


module.exports=router;