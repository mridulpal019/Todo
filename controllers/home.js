const Tasks = require("../models/task");

module.exports.home=function(req,res){
    return res.render('home',{
        title:'Todo'
    });
}

module.exports.createTask=function(req,res){
    Tasks.create({
        task_desc:req.body.task_desc,
        category:req.body.category,
        deadline:req.body.deadline
    },function(err,newTask){
        if (err){
            console.log('error in adding tasks')
        }
        console.log('this is new task',newTask);
        return res.redirect('back');
    })

}


