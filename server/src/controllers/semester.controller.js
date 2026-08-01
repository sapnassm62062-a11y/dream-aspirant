const Semester = require("../models/Semester.model");

// =======================
// Add Semester
// =======================

const addSemester = async (req, res) => {
    try {

        const {
            semesterNumber,
            semesterName,
            description
        } = req.body;

        const existingSemester = await Semester.findOne({
            semesterNumber
        });

        if (existingSemester) {
            return res.status(400).json({
                message: "Semester already exists"
            });
        }

        const semester = await Semester.create({
            semesterNumber,
            semesterName,
            description
        });

        res.status(201).json({
            success: true,
            message: "Semester Added Successfully ✅",
            semester
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// =======================
// Get All Semesters
// =======================

const getSemesters = async (req, res) => {

    try {

        const semesters = await Semester.find().sort({
            semesterNumber: 1
        });

        res.status(200).json({
            success: true,
            semesters
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// =======================
// Update Semester
// =======================

const updateSemester = async (req, res) => {

    try {

        const semester = await Semester.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!semester) {
            return res.status(404).json({
                message: "Semester not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Semester Updated Successfully ✅",
            semester
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// =======================
// Delete Semester
// =======================

const deleteSemester = async (req, res) => {

    try {

        const semester = await Semester.findByIdAndDelete(
            req.params.id
        );

        if (!semester) {
            return res.status(404).json({
                message: "Semester not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Semester Deleted Successfully ✅"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addSemester,
    getSemesters,
    updateSemester,
    deleteSemester
};