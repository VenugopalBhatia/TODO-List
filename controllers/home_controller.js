const TaskList = require('../models/Chore');

module.exports.home = function(req,res){
    TaskList.find({},function(err,checklist){
        if(err){
            console.log('Error retrieving tasks from db');
            return;
        }

        return res.render('home',{'title':"TODO App","checklist":checklist});;
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

// module.exports.deleteTask = function(req,res){
    
// }