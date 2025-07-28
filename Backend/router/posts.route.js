const express=require('express');
const { getAllPosts } = require('../controllers/posts.controller');


const router=express.Router();

router.get("/get-posts",getAllPosts)


module.exports=router;