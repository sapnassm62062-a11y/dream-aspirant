const Test = require("../models/Test.model");

// ==============================
// Add Question
// ==============================

const addQuestion = async (req, res) => {

    try {

        const test = await Test.create(req.body);

        res.status(201).json({

            success: true,

            message: "Question Added Successfully",

            test

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==============================
// Get All Questions
// ==============================

const getQuestions = async (req, res) => {

    try {

        const tests = await Test.find();

        res.json({

            success: true,

            tests

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==============================
// Update Question
// ==============================

const updateQuestion = async (req, res) => {

    try {

        const test = await Test.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json({

            success: true,

            message: "Question Updated Successfully",

            test

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ==============================
// Delete Question
// ==============================

const deleteQuestion = async (req, res) => {

    try {

        await Test.findByIdAndDelete(req.params.id);

        res.json({

            success: true,

            message: "Question Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    addQuestion,

    getQuestions,

    updateQuestion,

    deleteQuestion

};