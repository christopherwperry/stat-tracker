const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: "Please enter a name for the activity"
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
  count : {
    type: Number,
    required: "Enter the number of times the activity was performed",
    default: 0
  }
})

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
