const Tasks = require("../models/task");

module.exports.home=function(req,res){
    Tasks.find({},function(err,tasks){
        if (err){
            console.log("error in fetching contact from db");
            return;
        }
        return res.render('home',{
            title :"Todo",
            task_list:tasks,
    })
  

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


