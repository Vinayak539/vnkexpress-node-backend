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

const UserDetail = mongoose.model('UserDetail', userSchema);

module.exports = UserDetail;