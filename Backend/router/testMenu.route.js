const express = require("express");
const router = express.Router();
const { getMenuHtml } = require("../controllers/testMenu.Controller");

router.get("/get-testmenu", getMenuHtml);

module.exports = router;