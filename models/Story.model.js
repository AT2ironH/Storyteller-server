const mongoose = require("mongoose");

// create story schema here

const storySchema = new mongoose.Schema({

  image: {
    type: String,
    default: "",
    // required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  location: [{
    type: Number,
    // required: true,
}],

  creator: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  public: {
    type: Boolean,
    enum: [true, false],
  }

});

const StoryModel = mongoose.model("story", storySchema);

module.exports = StoryModel;

