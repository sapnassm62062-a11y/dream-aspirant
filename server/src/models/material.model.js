const mongoose = require("mongoose");


const materialSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    type:{
        type:String,
        required:true
    },


    subject:{
        type:String,
        required:true
    },


    fileUrl:{
        type:String
    }


},{
    timestamps:true
});



module.exports =
mongoose.models.Material ||
mongoose.model("Material", materialSchema);