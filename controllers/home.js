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

module.exports.deleteTask=function(req,res){
    var id =req.query;
  
  //  return res.end("<h1>Delete page</h1>")
    for(let i in id){
    Tasks.findByIdAndDelete(i,function(err){
        if (err){
            console.log("error in deleting a objext in database");
            return;
        }
        
    })}
    return res.redirect('back');

}

