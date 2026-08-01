const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
{
    exam: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    options: {
        type: [String],
        required: true
    },

    correctAnswer: {
        type: String,
        required: true
    },

    explanation: {
        type: String,
        default: ""
    },

    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Easy"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Test", testSchema);