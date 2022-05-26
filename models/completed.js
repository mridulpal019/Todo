const mongoose= require('mongoose');

const completedSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

const Completed = mongoose.model("Completed",completedSchema);

module.exports= Completed