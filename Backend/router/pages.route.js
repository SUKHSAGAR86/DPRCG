const express = require("express");
const { getPages, getPageById } = require("../controllers/pages.controller");

const router = express.Router();

router.get("/get-pages", getPages); // GET /api/pages
router.get("/get-page/:id", getPageById); // GET /api/page/1

module.exports = router;
