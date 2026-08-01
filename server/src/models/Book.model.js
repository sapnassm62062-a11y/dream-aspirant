const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    category: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    pdfUrl: {
        type: String,
        required: true
    },

    isFree: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Book", bookSchema);