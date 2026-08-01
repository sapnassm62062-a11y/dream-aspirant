const express = require("express");

const router = express.Router();

const {
    addSubject,
    getSubjects,
    getSubjectsBySemester,
    updateSubject,
    deleteSubject
} = require("../controllers/subject.controller");

router.post("/", addSubject);
router.get("/", getSubjects);
router.get("/:semesterId", getSubjectsBySemester);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);

module.exports = router;