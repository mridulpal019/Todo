const mongoose= require('mongoose');

const taskSchema= new mongoose.Schema({
    task_desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    deadline:{
        type:Date,
        required:true,
    }
})

const Tasks=mongoose.model("Tasks",taskSchema);

module.exports= Tasks;