const Paper = require("../models/Paper.model");

// Add Paper
const addPaper = async (req, res) => {
    try {

        const paper = await Paper.create(req.body);

        res.status(201).json({
            success: true,
            message: "Paper Added Successfully",
            paper
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Papers
const getPapers = async (req, res) => {
    try {

        const papers = await Paper.find()
            .populate("semester")
            .populate("subject");

        res.json({
            success: true,
            papers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Paper
const deletePaper = async (req, res) => {

    try {

        await Paper.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Paper Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addPaper,
    getPapers,
    deletePaper
};