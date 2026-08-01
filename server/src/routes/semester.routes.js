const express = require("express");

const router = express.Router();

const {
    addSemester,
    getSemesters,
    updateSemester,
    deleteSemester
} = require("../controllers/semester.controller");

router.post("/", addSemester);

router.get("/", getSemesters);

router.put("/:id", updateSemester);

router.delete("/:id", deleteSemester);

module.exports = router;