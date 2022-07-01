const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Importing the routes
const availableRoutes = require('./routes/availableRoutes');
const indexRoutes = require('./routes/indexRoutes');

const app = express();
app.use(express.json());


// Database connection
mongoose.connect('mongodb+srv://admin-vinayak:WsUMgGzGLW75QVuR@cluster0-xgcqw.mongodb.net/vnkexpress',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
// Database connection


 
// Activating CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Handling the routes
app.use('/', indexRoutes);
app.use('/routes', availableRoutes);



// Here is the code for the port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, ()=>{
    console.log("Hey there!!! Welcome onboard to vnk express.")
});