const express = require("express");
const router = express.Router();

const Exam = require("../models/exam.model");
const Subject = require("../models/subject.model");
const Material = require("../models/material.model");
const User = require("../models/user.model");
const Mock = require("../models/mock.model");
const Result = require("../models/result.model");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const upload = require("../middleware/upload.middleware");


// =======================
// ADD EXAM
// =======================

router.post(
  "/exam",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {

      const exam = await Exam.create(req.body);

      res.status(201).json({
        message: "Exam Added Successfully",
        exam
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  }
);


// =======================
// GET ALL EXAMS
// =======================

router.get(
  "/exam",
  async (req, res) => {
    try {

      const exams = await Exam.find();

      res.json(exams);

    } catch (error) {

      res.status(500).json({
        message:error.message
      });

    }
  }
);


// =======================
// GET SINGLE EXAM
// =======================

router.get(
  "/exam/:id",
  async(req,res)=>{

    try{

      const exam = await Exam.findById(req.params.id);

      if(!exam){
        return res.status(404).json({
          message:"Exam not found"
        });
      }

      res.json(exam);

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);

// =======================
// ADD SUBJECT
// =======================

router.post(
  "/subject",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const subject = await Subject.create(req.body);

      res.status(201).json({
        message:"Subject Added Successfully",
        subject
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// GET SUBJECTS
// =======================

router.get(
  "/subject",
  async(req,res)=>{

    try{

      const subjects = await Subject.find();

      res.json(subjects);

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// ADD MATERIAL
// =======================

router.post(
  "/material",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const material = await Material.create(req.body);

      res.status(201).json({
        message:"Material Added Successfully",
        material
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// GET MATERIAL
// =======================

router.get(
  "/material",
  async(req,res)=>{

    try{

      const material = await Material.find();

      res.json(material);

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// GET ALL USERS
// =======================

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const users = await User
        .find()
        .select("-password");

      res.json(users);

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// DELETE EXAM
// =======================

router.delete(
  "/exam/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      await Exam.findByIdAndDelete(req.params.id);

      res.json({
        message:"Exam Deleted Successfully"
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// DELETE SUBJECT
// =======================

router.delete(
  "/subject/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      await Subject.findByIdAndDelete(req.params.id);

      res.json({
        message:"Subject Deleted Successfully"
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// DELETE MATERIAL
// =======================

router.delete(
  "/material/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      await Material.findByIdAndDelete(req.params.id);

      res.json({
        message:"Material Deleted Successfully"
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// UPDATE EXAM
// =======================

router.put(
  "/exam/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const exam = await Exam.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );

      res.json({
        message:"Exam Updated Successfully",
        exam
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// UPDATE SUBJECT
// =======================

router.put(
  "/subject/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const subject = await Subject.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );

      res.json({
        message:"Subject Updated Successfully",
        subject
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// UPDATE MATERIAL
// =======================

router.put(
  "/material/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const material = await Material.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );

      res.json({
        message:"Material Updated Successfully",
        material
      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// UPLOAD MATERIAL PDF
// =======================

router.post(
  "/material/upload",
  authMiddleware,
  adminMiddleware,
  upload.single("file"),
  async(req,res)=>{

    try{

      const {
        title,
        type,
        subject
      } = req.body;


      if(!req.file){

        return res.status(400).json({
          message:"PDF file required"
        });

      }


      const material = await Material.create({

        title,
        type,
        subject,

        fileUrl:
        `/uploads/materials/${req.file.filename}`

      });


      res.status(201).json({

        message:"Material Uploaded Successfully",

        material

      });


    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// ADD MOCK QUESTION
// =======================

router.post(
  "/mock",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const mock = await Mock.create(req.body);

      res.status(201).json({

        message:"Question Added Successfully",

        mock

      });

    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// GET MOCK QUESTIONS
// =======================

router.get(
  "/mock",
  async(req,res)=>{

    try{

      const questions =
      await Mock.find()
      .sort({
        createdAt:-1
      });


      res.json(questions);


    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// UPDATE MOCK
// =======================

router.put(
  "/mock/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const mock =
      await Mock.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );


      res.json({

        message:"Question Updated Successfully",

        mock

      });


    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// DELETE MOCK
// =======================

router.delete(
  "/mock/:id",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      await Mock.findByIdAndDelete(
        req.params.id
      );


      res.json({

        message:"Question Deleted Successfully"

      });


    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


// =======================
// GET ALL RESULTS
// =======================

router.get(
  "/results",
  authMiddleware,
  adminMiddleware,
  async(req,res)=>{

    try{

      const results =
      await Result.find()
      .populate(
        "user",
        "name email phone"
      )
      .sort({
        createdAt:-1
      });


      res.json(results);


    }catch(error){

      res.status(500).json({
        message:error.message
      });

    }

  }
);


module.exports = router;