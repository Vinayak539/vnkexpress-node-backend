const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  u_id: {
    type: Number,
    required: [true, 'User ID is mandatory']
  },
  name: String, // String is shorthand for {type: String}
  contact_number: {
    type: Number,
    required: [true, 'User ID is mandatory']
  },
  email: String,
  bookings: {
    // j_id,
    seat_info: {
      type: [{
        seat_num: Number
      }]
    }
  }
});

const routesSchema = new mongoose.Schema({
  r_id: {
    type: Number,
    required: [true, 'Route ID is mandatory']
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
});


const busSchema = new mongoose.Schema({
  b_id: {
    type: Number,
    required: [true, 'Bus ID is mandatory']
  },
  bus_type: {
    type: String,
    required: [true, 'Bus type is mandatory']
  },
  no_of_seats: {
    type: Number
  },
  configuration: String
});

const journeySchema = new mongoose.Schema({
  j_id: {
    type: String,
    required: [true, 'Journey ID is mandatory']
  },
  date: {
    type: Date,
    required: true
  },
  // b_id,
  // r_id,
  seats_info: {
    type: [{
      seat_num: Number,
      passenger_name: String,
      passenger_gender: String
    }]
  },
});

module.exports.userSchema = userSchema;
module.exports.routesSchema = routesSchema;
module.exports.busSchema = busSchema;
module.exports.journeySchema = journeySchema;