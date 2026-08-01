const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema(
{
    semester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semester",
        required: true
    },

    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },

    examName: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    pdfUrl: {
        type: String,
        required: true
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("Paper", paperSchema);