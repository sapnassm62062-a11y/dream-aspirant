const Result = require("../models/Result.model");

// Save Result
const saveResult = async (req, res) => {

    try {

        const result = await Result.create(req.body);

        res.status(201).json({
            success: true,
            message: "Result Saved Successfully",
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Results
const getResults = async (req, res) => {

    try {

        const results = await Result.find().populate("user");

        res.json({
            success: true,
            results
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {

    saveResult,

    getResults

};