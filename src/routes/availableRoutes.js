const express = require("express");
var router = express.Router();

const availableRoutes = require('../controllers/availableRoutesController');


router.get('/', availableRoutes.getAvailableRoutes);
router.post('/', availableRoutes.addAvailableRoutes);

module.exports = router;