const express = require("express");
const journeyModel = require('../models/journeyModel');
var RouteDetail = require("../models/routeModel");

module.exports.getJourneyDetails = (req, res)=>{
    if(req.params.source && req.params.destination && req.params.date){
        var routeId;
        RouteDetail.find({source: req.params.source, destination: req.params.destination}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
                routeId=result[0].r_id;
                // console.log("Here are the routes found", result, routeId);
            }
          });
        
        setTimeout(()=>{
            journeyModel.find({r_id: routeId, date: req.params.date}, function(err, result) {
                if (err) {
                  console.log(err);
                } else {
                  res.json(result);
                }
              });
        }, 2000);
    }else{
        journeyModel.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
          });
    }
}

module.exports.addJourneyDetails = (req, res)=>{
    var myobj = [     
        { 'j_id': 12, 'date': "03-07-22", 'b_id': 12, 'r_id':12, 'seats_info':{}},  
        { 'j_id': 13, 'date': "03-07-22", 'b_id': 13, 'r_id':13, 'seats_info':{}},    
        { 'j_id': 14, 'date': "03-07-22", 'b_id': 14, 'r_id':12, 'seats_info':{}},  
        { 'j_id': 15, 'date': "03-07-22", 'b_id': 15, 'r_id':12, 'seats_info':{}},   
      ]; 

    journeyModel.insertMany(myobj, function(error, docs) {
        if(error){
          res.send(error);
        }else{
          res.status(200).json(docs);
        }
      });
}