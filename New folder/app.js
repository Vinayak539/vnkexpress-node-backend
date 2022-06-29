const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Importing the controllers
const homeController = require('./controllers/homeController');


// Importing the schemas
const allSchemas = require('./database/schemas/schemas');

const app = express();

app.use(express.json());

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

// Creating the models using the schemas 
 const UserDetail = mongoose.model('UserDetail', allSchemas.userSchema);
 const RouteDetail = mongoose.model('RouteDetail', allSchemas.routesSchema);
 const BusDetail = mongoose.model('BusDetail', allSchemas.busSchema);
 const JourneyDetail = mongoose.model('JourneyDetail', allSchemas.journeySchema);
 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res)=>{
    res.send({ error: 'message' })
    console.log("Backend method is called");
})

app.get('/getRoutes', (req, res)=>{
  var myobj = [     
    { 'r_id': 12, 'destination': "Mumbai", 'source': "Ghaziabad"},  
    { 'r_id': 13, 'destination': "Mumbai", 'source': "CA"},  
    { 'r_id': 14, 'destination': "Mumbai", 'source': "Islamabad"},  
    { 'r_id': 15, 'destination': "Mumbai", 'source': "London"}  
  ];  

  db.RouteDetail.insert({myobj});

  //  setTimeout(()=>{
  //   RouteDetail.find({}, function (err, docs) {
  //     if(docs){
  //       res.send(docs);
  //     }else{
  //       res.send(err);
  //     }
  //   });
  //  }, 2000);
})

app.get('/home', (req, res)=>{
  var result = homeController.sayHello("Vinayak");
  res.send(result);
})

app.get('/test', (req, res)=>{
    console.log("Backend method is called");
    res.send("Welcome to test");
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, ()=>{
    console.log("Hey there!!! Welcome onboard to vnk express.")
});