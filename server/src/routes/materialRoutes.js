const express = require("express");

const router = express.Router();

const Material = require("../models/Material");



// Get all materials

router.get("/", async(req,res)=>{

    try{

        const materials = await Material.find();

        res.json(materials);

    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});




// Add material

router.post("/", async(req,res)=>{

    try{


        const material = await Material.create(req.body);


        res.json({

            message:"Material Added Successfully",

            material

        });


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;