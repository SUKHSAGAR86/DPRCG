const express = require('express');
const { getTanders } = require('../controllers/Tenders.contoller');

const router=express.Router();

router.get("/get-tenders",getTanders);

module.exports=router;
