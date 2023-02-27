const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "mohon nama diisi"],
  },
  text: {
    type: String,
    required: [true, "mohon komentar diisi"],
  },
  backgroundColor: {
    type: String,
  },
  date: { type: String, default: Date },
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: mongoose.Schema.ObjectId,
    ref: "Comment",
    required: true,
  },
});

module.exports = mongoose.model("reply", ReplySchema);
