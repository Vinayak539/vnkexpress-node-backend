const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port), ()=>{
    console.log("Hey there!!! Welcome onboard to vnk express.")
};