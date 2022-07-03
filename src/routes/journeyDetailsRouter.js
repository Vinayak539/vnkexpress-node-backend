const express = require("express");
var router = express.Router();

const JourneyDetailsController = require('../controllers/journeyDetailsController');

router.get('/:source?/:destination?/:date?', JourneyDetailsController.getJourneyDetails);
router.post('/', JourneyDetailsController.addJourneyDetails);

module.exports = router;