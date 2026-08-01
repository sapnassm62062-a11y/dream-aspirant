const express = require("express");

const router = express.Router();

const {

    addQuestion,

    getQuestions,

    updateQuestion,

    deleteQuestion

} = require("../controllers/test.controller");

router.post("/", addQuestion);

router.get("/", getQuestions);

router.put("/:id", updateQuestion);

router.delete("/:id", deleteQuestion);

module.exports = router;