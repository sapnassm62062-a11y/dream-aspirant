const mongoose = require("mongoose");

const mockSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    optionA: {
      type: String,
      required: true,
    },

    optionB: {
      type: String,
      required: true,
    },

    optionC: {
      type: String,
      required: true,
    },

    optionD: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      enum: ["A", "B", "C", "D"],
      required: true,
    },

    exam: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Mock ||
  mongoose.model("Mock", mockSchema);