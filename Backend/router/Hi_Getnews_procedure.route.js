// routes/procedureRoute.js
const express = require("express");
const router = express.Router();
const {getHiGetNewsProcedureData } = require("../controllers/Hi_GetNews_procedure.controller");

router.get("/get-higetnews", getHiGetNewsProcedureData);

module.exports = router;
