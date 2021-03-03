const mongoose = require("mongoose");

//third model for posting sth...message or a review.

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  reviewMessage: {
    type: String,
    required: true,
  },
  storyId: {
    ref: "story",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
