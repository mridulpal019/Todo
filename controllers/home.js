const Tasks = require("../models/task");
const Completed=require('../models/completed');


//used for rendering the home page
module.exports.home=function(req,res){
    Tasks.find({},function(err,tasks){
        if (err){
            console.log("error in fetching contact from db");
            return;
        }
        Completed.find({},function(err,ctasks){
            if (err){ console.log('error')};
            console.log(ctasks);
            return res.render('home',{
                title :"Todo",
                task_list:tasks,
                ctasks_list:ctasks
        })      
    })
});
}
//the inputed task will be stored in the database 
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
//Delete task 
module.exports.deleteTask=function(req,res){
    var id =req.query;
    if (id){
    //it will clear the recently_completed db before adding new items to it. 
    Completed.deleteMany({},function(err){
        if(err){console.log("cannot delete the items of recent completed");}
    });
 
    for(let i in id){
    Tasks.findById(i,function(err,ctask){
        if (err){
            console.log('error in finding task for adding in recentlu completed')
        }
        //it will add every recent completed item to the list
        Completed.create({
            name:ctask.task_desc
        })

    })    
   
    Tasks.findByIdAndDelete(i,function(err){
        if (err){
            console.log("error in deleting a objext in database");
            return;
        }
        
    })} return res.redirect('back');
}  
}

//delelte Completed Task
module.exports.deleteCompletedTask =function(req,res){
    Completed.deleteMany({},function(err){
        if(err){console.log("cannot delete the items of recent completed");}
        return res.redirect('back');
    });
    
}
