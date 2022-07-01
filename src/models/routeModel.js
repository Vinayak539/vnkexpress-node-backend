const mongoose = require("mongoose");

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

  const RouteDetail = mongoose.model('RouteDetail', routesSchema);
  module.exports = RouteDetail;