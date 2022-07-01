const express = require("express");
var RouteDetail = require("../models/routeModel");

module.exports.getAvailableRoutes = function getAvailableRoutes(req, res){
    RouteDetail.find({}, function (err, docs) {
        if(docs){
          res.send(docs);
        }else{
          res.send(err);
        }
    });
}