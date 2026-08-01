const express = require("express");
const router = express.Router();

const Result = require("../models/result.model");
const authMiddleware = require("../middleware/auth.middleware");
const PDFDocument = require("pdfkit");

// Save result
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { exam, score, totalQuestions } = req.body;

    const result = await Result.create({
      user: req.user.id,
      exam,
      score,
      totalQuestions,
    });

    res.status(201).json({
      message: "Result saved successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// My results
router.get("/my-results", authMiddleware, async (req, res) => {
  try {
    const results = await Result.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// LEADERBOARD

router.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await Result.aggregate([
      {
        $group: {
          _id: "$user",
          bestScore: { $max: "$score" },
          totalQuestions: { $max: "$totalQuestions" },
        },
      },
      {
        $sort: {
          bestScore: -1,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          name: "$user.name",
          email: "$user.email",
          bestScore: 1,
          totalQuestions: 1,
        },
      },
    ]);

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// DOWNLOAD RESULT PDF

router.get(
  "/certificate/:id",
  authMiddleware,
  async (req, res) => {
    try {
      const result = await Result.findById(req.params.id).populate(
        "user",
        "name email"
      );

      if (!result) {
        return res.status(404).json({
          message: "Result not found",
        });
      }

      const doc = new PDFDocument();

      res.setHeader(
        "Content-Type",
        "application/pdf"
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${result.user.name}-score-card.pdf`
      );

      doc.pipe(res);

      doc.fontSize(24).text(
        "Dream Aspirant Score Card",
        { align: "center" }
      );

      doc.moveDown();

      doc.fontSize(16).text(
        `Student: ${result.user.name}`
      );

      doc.text(
        `Email: ${result.user.email}`
      );

      doc.text(
        `Exam: ${result.exam}`
      );

      doc.text(
        `Score: ${result.score}/${result.totalQuestions}`
      );

      doc.text(
        `Date: ${new Date(result.createdAt).toLocaleDateString()}`
      );

      doc.moveDown();

      doc.fontSize(18).text(
        "Congratulations!",
        { align: "center" }
      );

      doc.end();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
module.exports = router;