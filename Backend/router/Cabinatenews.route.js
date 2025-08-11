const  express = require('express');
const { getCabinateNewsPosts } = require('../controllers/Cabinatenews.controller');

const router=express.Router()
router.get("/get-cabinatenews",getCabinateNewsPosts)

module.exports=router;