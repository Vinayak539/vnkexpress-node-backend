const express = require("express");
var RouteDetail = require("../models/routeModel");

module.exports.getAvailableRoutes = (req, res, next)=>{
  RouteDetail.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
}


module.exports.addAvailableRoutes = async (req, res, next)=>{
  var myobj = [     
    { 'r_id': 12, 'destination': "Mumbai", 'source': "Ghaziabad"},  
    { 'r_id': 13, 'destination': "Mumbai", 'source': "CA"},  
    { 'r_id': 14, 'destination': "Mumbai", 'source': "Islamabad"},  
    { 'r_id': 15, 'destination': "Mumbai", 'source': "London"}  
  ];  
  RouteDetail.insertMany(myobj, function(error, docs) {
    if(error){
      res.send(error);
    }else{
      res.json(docs);
    }
  });
}