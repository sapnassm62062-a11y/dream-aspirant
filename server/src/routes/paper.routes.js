const express = require("express");

const router = express.Router();

const {
    addPaper,
    getPapers,
    deletePaper
} = require("../controllers/paper.controller");

router.post("/", addPaper);

router.get("/", getPapers);

router.delete("/:id", deletePaper);

module.exports = router;