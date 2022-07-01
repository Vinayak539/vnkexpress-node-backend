const express = require("express");
var router = express.Router();

router.get('/', (req, res)=>{
    res.send({ error: 'message' })
    console.log("Backend method is called");
})

module.exports = router;