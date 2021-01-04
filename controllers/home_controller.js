const TaskList = require('../models/Chore');

module.exports.home = function(req,res){
    TaskList.find({},function(err,checklist){
        if(err){
            console.log('Error retrieving tasks from db');
            return;
        }

        return res.render('home',{'title':"TODO App","checklist":checklist});
    })
    
}

module.exports.addTask = function(req,res){
    // console.log(req.body.description);
    TaskList.create(req.body,function(err,newTask){
        if(err){
            console.log('Error in adding document');
            return;
        }

        console.log("Chore added:",newTask);
        return res.redirect('back');
    })
}

module.exports.deleteTask = function(req,res){
    
    let id = req.query.id;
    console.log("delete request: ",id);

    
    TaskList.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`Error in deleting task with id: ${id}`);
            return;
        }
        console.log(`Deleted task with id: ${id}`);
        res.setHeader("Content-Type", "text/html")
        return res.redirect('/');
    })
    
    
    
}