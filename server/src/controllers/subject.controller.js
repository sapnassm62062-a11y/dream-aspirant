const Subject = require("../models/Subject.model");
const Semester = require("../models/Semester.model");

// Add Subject
const addSubject = async (req, res) => {
    try {
        const { semester, subjectCode, subjectName, credits } = req.body;

        const semesterExists = await Semester.findById(semester);

        if (!semesterExists) {
            return res.status(404).json({
                success: false,
                message: "Semester not found"
            });
        }

        const subject = await Subject.create({
            semester,
            subjectCode,
            subjectName,
            credits
        });

        res.status(201).json({
            success: true,
            message: "Subject Added Successfully",
            subject
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Subjects
const getSubjects = async (req, res) => {
    try {

        const subjects = await Subject.find()
            .populate("semester");

        res.json({
            success: true,
            subjects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Subjects By Semester
const getSubjectsBySemester = async (req, res) => {

    try {

        const subjects = await Subject.find({
            semester: req.params.semesterId
        }).populate("semester");

        res.json({
            success: true,
            subjects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Subject
const updateSubject = async (req, res) => {

    try {

        const subject = await Subject.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "Subject Updated Successfully",
            subject
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Subject
const deleteSubject = async (req, res) => {

    try {

        await Subject.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Subject Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addSubject,
    getSubjects,
    getSubjectsBySemester,
    updateSubject,
    deleteSubject
};