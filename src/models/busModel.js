const mongoose = require("mongoose");

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

  const BusDetail = mongoose.model('BusDetail', busSchema);
  module.exports = BusDetail;