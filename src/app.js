const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

// Importing the routes
const availableRoutes = require('./routes/availableRoutes');
const indexRoutes = require('./routes/indexRoutes');
const journeyDetailsRouter = require('./routes/journeyDetailsRouter');
const app = express();


app.use(express.json());

// Activating CORS
// app.use(cors({
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));


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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Handling the routes
app.use('/', indexRoutes);
app.use('/routes', availableRoutes);
app.use('/journey-details', journeyDetailsRouter);



// Here is the code for the port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, ()=>{
    console.log("Hey there!!! Welcome onboard to vnk express.")
});