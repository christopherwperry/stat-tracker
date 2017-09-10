const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter a name for the activity"
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
})

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
