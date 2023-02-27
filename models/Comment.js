const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "mohon nama diisi"],
    },
    text: {
      type: String,
      required: [true, "mohon komentar diisi"],
    },
    confirm: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    date: { type: String, default: Date },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
CommentSchema.virtual("balasan", {
  ref: "reply",
  localField: "_id",
  foreignField: "comment",
  justOne: false,
});
module.exports = mongoose.model("comment", CommentSchema);
