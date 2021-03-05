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

  location: {
    type: [],
    required: true,
  },

  creator: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  public: {
    enum: [true, false],
  }

});

const StoryModel = mongoose.model("story", storySchema);

module.exports = StoryModel;

