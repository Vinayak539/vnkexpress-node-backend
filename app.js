const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const homeController = require('./controllers/homeController');

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



// Here we are creating the schema
// const UserSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//       default: 0,
//     },
//   });
  
//   const User = mongoose.model("User", UserSchema);
  
//   module.exports = User;

app.get('/', (req, res)=>{
    res.send("Welcome");
    console.log("Backend method is called");
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
  port = 8000;
}
app.listen(port, ()=>{
    console.log("Hey there!!! Welcome onboard to vnk express.")
});