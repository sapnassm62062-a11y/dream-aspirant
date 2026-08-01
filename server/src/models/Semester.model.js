const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema(
{
    semesterNumber: {
        type: Number,
        required: true,
        unique: true
    },

    semesterName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    isActive: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("Semester", semesterSchema);