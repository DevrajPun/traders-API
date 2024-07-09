const mongoose = require("mongoose")
const TenderSchema = new mongoose.Schema({
  name: {
    type: String,
    Requried: true
  },
  description: {
    type: String,
    Requried: true
  },
  start_time: {
    type: Date,
    Requried: true
  },
  end_time: {
    type: Date,
    Requried: true
  },
  buffer_time: {
    type: Number,
    Requried: 0
  }
},
  { timestamps: true }
)
const TenderModel = mongoose.model("tender", TenderSchema)
module.exports = TenderModel