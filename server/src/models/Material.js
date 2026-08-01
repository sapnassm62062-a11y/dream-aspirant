const mongoose = require("mongoose");


const materialSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    subject:{
        type:String,
        required:true
    },


    topic:{
        type:String,
        required:true
    },


    type:{
        type:String,
        required:true
    },


    description:{
        type:String
    },


    price:{
        type:Number,
        default:0
    },


    fileUrl:{
        type:String
    }


},{
    timestamps:true
});


module.exports = mongoose.model(
    "Material",
    materialSchema
);