const express = require("express");
var router = express.Router();

const availableRoutes = require('../controllers/availableRoutesController');


router.get('/', availableRoutes.getAvailableRoutes);


router.post('/', (req, res)=>{
    var myobj = [     
      { 'r_id': 12, 'destination': "Mumbai", 'source': "Ghaziabad"},  
      { 'r_id': 13, 'destination': "Mumbai", 'source': "CA"},  
      { 'r_id': 14, 'destination': "Mumbai", 'source': "Islamabad"},  
      { 'r_id': 15, 'destination': "Mumbai", 'source': "London"}  
    ];  
})

module.exports = router;