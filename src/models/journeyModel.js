const mongoose = require("mongoose");

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

  const JourneyDetail = mongoose.model('JourneyDetail', journeySchema);

  module.exports = JourneyDetail;