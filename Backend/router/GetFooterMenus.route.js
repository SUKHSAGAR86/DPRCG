const express = require('express');
const { getFooterMenus } = require('../controllers/GetFooterMenus.controller');


const router = express.Router();

router.get('/get-footermenus',getFooterMenus)

module.exports = router;